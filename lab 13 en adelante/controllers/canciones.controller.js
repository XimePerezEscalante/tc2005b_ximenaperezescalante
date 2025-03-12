const Cancion = require('../models/canciones.model');

exports.get_agregar = (request, response, next) => {
    response.render('add_song');
}


exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const mi_cancion = new Cancion(request.body.songname, request.body.artist);
    mi_cancion.save();
    response.redirect('/Library');
    
}

exports.get_root = (request, response, next) => {
    response.render('library', {
        canciones: Cancion.fetchAll(),
    });
};