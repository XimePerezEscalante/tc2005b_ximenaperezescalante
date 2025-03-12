const Usuario = require('../models/users.model');

exports.get_signup = (request, response, next) => {
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }

    response.render('login.ejs', {
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
        Usuario(request.body.username, request.body.password);

    usuario.save().then(() => {
        request.session.info = `Tu usuario se ha creado`;
        response.redirect('/users/login');
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

    response.render('login.ejs', {
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
                        response.redirect('/nombre');
                    });
                } else {
                    request.session.warning = `Usuario y/o contraseña incorrectos`;
                    response.redirect('/users/login');
                }
            }).catch((error) => {
                console.log(error);
            });
        } else {
            request.session.warning = `Usuario y/o contraseña incorrectos`;
            response.redirect('/users/login');
        }
    }).catch((error) => {
        console.log(error);
    });
};

exports.get_logout = (request, respinse, next) => {

    request.session.destroy(() => {
        response.redirect('/users/login');
    })
}