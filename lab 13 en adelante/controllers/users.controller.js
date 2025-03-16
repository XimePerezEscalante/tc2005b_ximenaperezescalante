/* exports.get_login = (request, response, next) => {
    response.render('login', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.usernameLogin || '',
    });
};

exports.post_login = (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.username = request.body.usernameLogin;
    response.redirect('/Library');
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/xp3'); 
    });
}; */





const Usuario = require('../models/users.model');

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
    });
};

exports.post_signup = (request, response, next) => {
    const usuario = new 
        Usuario(request.body.username, request.body.mail, request.body.password);

    usuario.save().then(() => {
        request.session.info = `Nueva cuenta creada`;
        response.redirect('/Library');
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
    });
};

exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username).then(([rows, fieldData]) => {
        if(rows.length > 0) {
            const bcrypt = require('bcryptjs');
            bcrypt.compare(request.body.password, rows[0].password).then((doMatch) => {
                if (doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.username = request.body.username;
                    return request.session.save((error) => {
                        response.redirect('/Library');
                    });
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

exports.get_logout = (request, response, next) => {

    request.session.destroy(() => {
        response.redirect('/xp3');
    })
}

