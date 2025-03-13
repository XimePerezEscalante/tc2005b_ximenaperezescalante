const Cancion = require('../models/canciones.model');

exports.get_agregar = (request, response, next) => {
    response.render('add_song',{
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
}


exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const mi_cancion = new Cancion(request.body.songname, request.body.artist);
    mi_cancion.save();
    response.setHeader('Set-Cookie', `ultima_cancion=${mi_cancion.name}`);
    response.redirect('/Library');
    
}

exports.get_root = (request, response, next) => {
    console.log(request.get('Cookie'));
    response.render('library', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        canciones: Cancion.fetchAll(),
    });
};