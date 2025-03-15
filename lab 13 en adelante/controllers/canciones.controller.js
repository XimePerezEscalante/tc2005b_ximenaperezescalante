const Cancion = require('../models/canciones.model');

exports.get_agregar = (request, response, next) => {
    response.render('add_song',{
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
};


exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const mi_cancion = new Cancion(request.body.songname, request.body.artist);
    mi_cancion.save()
        .then(() => {
            request.session.info = `La cancion ${mi_cancion.name} se ha creado`;
            response.setHeader('Set-Cookie', `ultima_cancion=${mi_cancion.name}`);
            response.redirect('/Library');
        })
        .catch((error) => {
            console.log(error);
        });
    
};

exports.get_editar = (request, response, next) => {
    //obtener el id del objeto en la base de datos, que le pasamos por la ruta con :id
    console.log(request.params.id);
    console.log(request.body.songId);
    console.log(request.body.nuevoTitulo);
    cancionEditar = Cancion.fetchOne(request.params.id)
        .then(([rows, fieldData]) => {
                console.log(fieldData);
                console.log(rows);
                response.render('edit_song', {
                    isLoggedIn: request.session.isLoggedIn || false,
                    username: request.session.username || '',
                    canciones: rows,
                });
            }).catch((error) => {
                console.log(error);
            });
    //poner el modal con render?
    
};

exports.post_editar = (request, response, next) => {
    console.log(request.params.id);
    console.log(request.body.nuevoTitulo);
    Cancion.editSong(request.params.id, request.body.newsongname, request.body.newartist);
    response.redirect('/Library'); //dijo lalo que haga render pero no estoy segura de por qué
};

exports.get_eliminar = (request, response, next) => {
    console.log(request.params.id);
    cancionEditar = Cancion.fetchOne(request.params.id)
        .then(([rows, fieldData]) => {
                console.log(fieldData);
                console.log(rows);
                response.render('delete_song', {
                    isLoggedIn: request.session.isLoggedIn || false,
                    username: request.session.username || '',
                    canciones: rows,
                });
            }).catch((error) => {
                console.log(error);
            });
};

exports.post_eliminar = (request, response, next) => {
    console.log(request.params.id);
    Cancion.deleteSongUser(request.params.id);
    response.redirect('/Library');
};

exports.get_root = (request, response, next) => {
    console.log(request.get('Cookie'));
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }

    Cancion.fetch(request.params.id)
        .then(([rows, fieldData]) => {
            console.log(fieldData);
            console.log(rows);
            response.render('library', {
                isLoggedIn: request.session.isLoggedIn || false,
                username: request.session.username || '',
                canciones: rows,
                info: mensaje,
            });
        }).catch((error) => {
            console.log(error);
        });
};