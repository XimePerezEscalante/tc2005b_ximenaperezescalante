const canciones = [];

module.exports = class Cancion {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre,mi_artista) {
        this.name = mi_nombre;
        this.artist = mi_artista;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        canciones.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return canciones;
    }

}