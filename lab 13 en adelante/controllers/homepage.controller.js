exports.get_xp3 = (request, response, next) => {
    response.render('homepage');
};

const path = require('path');

exports.get_purplemode = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};