exports.get_login = (request, response, next) => {
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
};

