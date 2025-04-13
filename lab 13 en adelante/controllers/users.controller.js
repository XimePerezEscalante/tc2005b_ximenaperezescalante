const Usuario = require('../models/users.model');
// Require:
var postmark = require("postmark");
const twofactor = require("node-2fa");

exports.get_signup = (request, response, next) => {
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }

    response.render('login', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        isNew: true,
        info: mensaje,
        warning: '',
        csrfToken: request.csrfToken(),
        privilegios: request.session.privilegios || [],
    });
};

exports.post_signup = (request, response, next) => {
    const usuario = new 
        Usuario(request.body.username, request.body.mail, request.body.password);

    usuario.save().then(() => {
        request.session.info = `Nueva cuenta creada`;
        /* var client = new postmark.ServerClient("0530a80f-f4e0-4115-9702-b1d6292dd7ba");

        client.sendEmail({
            "From": "gescalanpjj@gmail.com",
            "To": "gescalanpjj@gmail.com",
            "Subject": "Nuevo usuario creado",
            "HtmlBody": "<strong>Hello</strong> " + request.body.username + "!",
            "TextBody": "Hello from Postmark!",
            "MessageStream": "outbound"
        }); */

        response.redirect('/users/Login');
    }).catch((error) => {
        console.log(error);
    });
};

exports.get_login = (request, response, next) => {
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }

    const warning = request.session.warning || '';
    if (request.session.warning) {
        request.session.warning = '';
    }

    response.render('login', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        isNew: false,
        info: mensaje,
        warning: warning,
        csrfToken: request.csrfToken(),
        privilegios: request.session.privilegios || [],
    });
};

exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username).then(([rows, fieldData]) => {
        if(rows.length > 0) {
            const bcrypt = require('bcryptjs');
            bcrypt.compare(request.body.password, rows[0].password).then((doMatch) => {
                if (doMatch) {
                    Usuario.getPrivilegios(rows[0].username)
                        .then( ([privilegios, fieldData]) => {
                            request.session.privilegios = privilegios;
                            request.session.isLoggedIn = true;
                            request.session.username = request.body.username;
                            request.session.user_id = rows[0].id;
                            console.log(request.session.user_id);
                            for(let privilegio of privilegios){
                                if(privilegio.nombre=="asignar roles"){
                                    return request.session.save( (error) => {
                                        response.redirect('/users/AsignarRol');
                                        } ) 
                                }
                                else{
                                    return request.session.save( (error) => {
                                        response.redirect('/Library');
                                        } ) 
                                }
                            }
                            
                        })
                        .catch( (error) => {
                            console.log(error);
                        } )
                } else {
                    request.session.warning = `Usuario y/o contraseña incorrectos`;
                    response.redirect('/users/Login');
                }
            }).catch((error) => {
                console.log(error);
            });
        } else {
            request.session.warning = `Usuario y/o contraseña incorrectos`;
            response.redirect('/users/Login');
        }
    }).catch((error) => {
        console.log(error);
    });
};

exports.get_asignar_rol = (request, response, next) => {
    Usuario.getRoles()
        .then(([rows, fieldData]) => {
                console.log(fieldData);
                console.log(rows);
                roles_usuarios = rows;
            })
        .catch((error) => {
                console.log(error);
                roles_usuarios = [];
        });
    Usuario.fetchAll()
        .then(([rows, fieldData]) => {
                console.log(fieldData);
                console.log(rows);
                response.render('assign_roles', {
                    isLoggedIn: request.session.isLoggedIn || false,
                    username: request.session.username || '',
                    admin: request.session.admin || false,
                    csrfToken: request.csrfToken(),
                    privilegios: request.session.privilegios || [],
                    usuarios: rows,
                    roles: roles_usuarios || [],
                });
            })
        .catch((error) => {
                console.log(error);
        });
};

exports.post_modificar_rol = (request, response, next) => {
    console.log(request.params.id);
    console.log(request.body.id_rol);
    Usuario.modificarRoles(request.params.id, request.body.id_rol)
        .then(() => {
            request.session.info = `Rol modificado`;
            console.log(request.session.info);
            response.redirect('/users/AsignarRol');
        })
        .catch((error) => {
            console.log(error);
    });
}

exports.post_asignar_rol = (request, response, next) => {
    console.log(request.params.id);
    console.log(request.body.id_rol);
    Usuario.asignarRoles(request.params.id, request.body.id_rol)
        .then(() => {
            request.session.info = `Rol asignado`;
            console.log(request.session.info);
            response.redirect('/users/AsignarRol');
        })
        .catch((error) => {
            console.log(error);
    });
}

exports.get_logout = (request, response, next) => {

    request.session.destroy(() => {
        response.redirect('/xp3');
    })
}

