exports.get_xp3 = (request, response, next) => {
    response.render('homepage', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
};

const path = require('path');

exports.get_purplemode = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};