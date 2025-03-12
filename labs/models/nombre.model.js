const db = require('../util/database');

const personas = [];

module.exports = class Persona {
    constructor(mi_nombre){
        this.nombre = mi_nombre;
    }
    save(){
        return db.execute('INSERT INTO Personas(nombre) VALUES (?)', [this.nombre]);
    }

    static fetchAll(){
        return db.execute('SELECT * FROM Personas');
    }

    static fetchOne(id){
        return db.execute('SELECT * FROM Personas WHERE id = ?', [id]);
    }

    static fetch(id){
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }
}