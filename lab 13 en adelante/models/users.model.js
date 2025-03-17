const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {

    constructor(mi_username, mi_mail, mi_password) {
        this.username = mi_username;
        this.mail = mi_mail;
        this.password = mi_password;
    }

    save() {
        return bcrypt.hash(this.password, 12).then((password_cifrado) => {
            return db.execute(
                'INSERT INTO usuarios(username, mail, password) VALUES (?, ?, ?)', 
                [this.username, this.mail, password_cifrado]
                );
        }).catch((error) => {
            console.log(error);
        });
    }

    static fetchAll() {
        return db.execute('SELECT * FROM usuarios');
    }

    static fetchOne(username) {
        return db.execute('SELECT * FROM usuarios WHERE username = ?', [username]);
    }

    static fetch(username) {
        if (username) {
            return this.fetchOne(username);
        } else {
            return this.fetchAll();
        }
    }

    static asignarRoles(id_user, id_rol){
        return db.execute(
            `INSERT INTO usuario_rol(usuario_id, rol_id) VALUES (?, ?)`, [id_user,id_rol]
        );
    }

    static modificarRoles(id_user, id_rol){
        return db.execute(
            'UPDATE usuario_rol SET rol_id = ? WHERE usuario_id = ?', [id_rol, id_user]
        );
    }

    static getRoles() {
        return db.execute(`
            SELECT r.nombre
            FROM roles r, usuario_rol ur
            WHERE r.id=ur.rol_id
            ORDER BY ur.usuario_id
        `);
    }

    static getPrivilegios(username) {
        return db.execute(`
            SELECT DISTINCT p.nombre
            FROM privilegios p, rol_privilegio rp, roles r, usuario_rol ur, usuarios u
            WHERE p.id=rp.privilegio_id AND rp.rol_id=r.id AND r.id=ur.rol_id 
                AND u.id=ur.usuario_id AND u.username=?`, 
            [username]);
    }

}