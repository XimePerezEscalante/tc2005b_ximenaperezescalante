const personas = [];

module.exports = class Persona {
    constructor(mi_nombre){
        this.nombre = mi_nombre;
    }
    save(){
        personas.push(this);
    }

    static fetchAll(){
        return personas;
    }
}