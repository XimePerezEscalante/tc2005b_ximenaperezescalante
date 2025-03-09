const db = require('../util/database');

const personas = [];

module.exports = class Persona {
    constructor(mi_nombre){
        this.nombre = mi_nombre;
    }
    save(){
        return db.execute('INSERT INTO Personas(nombre) VALUES (?)', [this.nombre]);

        //personas.push(this);
    }

    static fetchAll(){
        return db.execute('SELECT * FROM Personas');
    }

    static fetchOne(id){
        return db.execute('SELECT * FROM Personas WHERE id = ?');
    }

    static fetch(id){
        return db.execute('SELECT * FROM Personas WHERE id = ?');
    }
}