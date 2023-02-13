export class persona {
    id?: Number;
    nombre: String;
    apellido: String;
    imgFondo: String;
    oficio: String;

    constructor (id: Number, nombre: String, apellido: String, imgFondo: String, oficio: String){
            this.nombre = nombre;
            this.apellido = apellido;
            this.imgFondo = imgFondo;
            this.oficio = oficio;
            this.id = id;
    }

}