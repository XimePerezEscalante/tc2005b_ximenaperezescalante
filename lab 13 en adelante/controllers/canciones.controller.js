const Cancion = require('../models/canciones.model');
const Biblioteca = require('../models/bibliotecas.model');

exports.get_agregar = (request, response, next) => {
    response.render('add_song',{
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        privilegios: request.session.privilegios || [],
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
                    csrfToken: request.csrfToken(),
                    canciones: rows,
                    privilegios: request.session.privilegios || [],
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
                    admin: request.session.admin || true,
                    csrfToken: request.csrfToken(),
                    privilegios: request.session.privilegios || [],
                    canciones: rows,
                });
            }).catch((error) => {
                console.log(error);
            });
};

exports.post_eliminar = (request, response, next) => {
    console.log(request.params.id);
    Cancion.deleteSongAdmin(request.params.id);
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
            console.log(request.session.user_id);
            response.render('library', {
                isLoggedIn: request.session.isLoggedIn || false,
                username: request.session.username || '',
                canciones: rows,
                info: mensaje,
                privilegios: request.session.privilegios || [],
            });
        }).catch((error) => {
            console.log(error);
        });
};

exports.get_agregar_biblioteca = (request, response, next) => {
    console.log(request.session.username);
    Cancion.fetchOne(request.params.id)
        .then(([rows, fieldData]) => {
            console.log(fieldData);
            console.log(rows);
            response.render('add_to_library', {
                isLoggedIn: request.session.isLoggedIn || false,
                username: request.session.username || '',
                csrfToken: request.csrfToken(),
                canciones: rows,
                privilegios: request.session.privilegios || [],
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.post_agregar_biblioteca = (request, response, next) => {
    console.log(request.params.id);
    console.log(request.session.user_id);
    const mi_biblioteca = new Biblioteca(request.session.user_id, request.params.id);
    mi_biblioteca.save()
        .then(() => {
            request.session.info = `La cancion se ha agregado a la biblioteca de ${request.session.username}`;
            console.log(request.session.info);
            response.redirect('/MyLibrary');
        })
        .catch((error) => {
            console.log(error);
        });
}

exports.get_eliminar_biblioteca = (request, response, next) => {
    console.log(request.params.id);
    console.log(request.session.user_id);
    Cancion.fetchOne(request.params.id)
        .then(([rows, fieldData]) => {
                console.log(fieldData);
                console.log(rows);
                response.render('delete_song', {
                    isLoggedIn: request.session.isLoggedIn || false,
                    username: request.session.username || '',
                    admin: request.session.admin || false,
                    csrfToken: request.csrfToken(),
                    privilegios: request.session.privilegios || [],
                    canciones: rows,
                });
            })
        .catch((error) => {
                console.log(error);
        });
}

exports.post_eliminar_biblioteca = (request, response, next) => {
    console.log(request.params.id);
    console.log(request.session.user_id);
    Cancion.deleteSongUser(request.params.id, request.session.user_id);
    response.redirect('/MyLibrary');
}

exports.get_root_biblioteca = (request, response, next) => {
    console.log(request.get('Cookie'));
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }
    canciones_usuario = [];

    Biblioteca.fetchAll(request.session.user_id)
        .then(([rows, fieldData]) => {
            console.log(fieldData);
            response.render('user_library', {
                isLoggedIn: request.session.isLoggedIn || false,
                username: request.session.username || '',
                admin: request.session.admin || false,
                canciones: rows,
                info: mensaje,
                privilegios: request.session.privilegios || [],
            });
            console.log(rows[0].cancion_id);
        }).catch((error) => {
            console.log(error);
        });
};