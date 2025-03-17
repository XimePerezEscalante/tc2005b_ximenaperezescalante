const db = require('../util/database');

module.exports = class Cancion {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre,mi_artista) {
        this.name = mi_nombre;
        this.artist = mi_artista;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute('INSERT INTO canciones(nombre,artista) VALUES (?,?)', [this.name, this.artist]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM canciones');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM canciones WHERE id = ?', [id]);
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

    static editSong(id, nuevoNombre, nuevoArtista){
        if (nuevoArtista && nuevoNombre){
            return db.execute('UPDATE canciones SET nombre = ?, artista = ? WHERE id = ?', [nuevoNombre, nuevoArtista, id]);
        }
        else if (nuevoArtista){
            return db.execute('UPDATE canciones SET artista = ? WHERE id = ?', [nuevoArtista, id]);
        }
        else if (nuevoNombre){
            return db.execute('UPDATE canciones SET nombre = ? WHERE id = ?', [nuevoNombre, id]);
        }
        
    }
    static deleteSongAdmin(id){
        return db.execute('DELETE FROM canciones WHERE id = ?;', [id]);
    }

    static deleteSongUser(id_song, id_user){
        return db.execute('DELETE FROM biblioteca WHERE cancion_id = ? AND usuario_id = ?;', [id_song, id_user]);
    }

}