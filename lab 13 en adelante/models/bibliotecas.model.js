const db = require('../util/database');

module.exports = class Biblioteca {

    constructor(mi_user_id, mi_cancion_id) {
        this.user_id = mi_user_id;
        this.song_id = mi_cancion_id;
    }

    save() {
        return db.execute(
            'INSERT INTO biblioteca(usuario_id, cancion_id) VALUES (?, ?)', 
            [this.user_id, this.song_id]);
    }

    static fetchAll(user_id) {
        return db.execute(
            `SELECT c.id, c.nombre, c.artista, c.imagen 
            FROM biblioteca b, canciones c
            WHERE b.cancion_id=c.id AND b.usuario_id = ?`,
            [user_id]);
    }
}