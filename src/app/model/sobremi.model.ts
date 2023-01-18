export class sobreMi {
    id?: Number;
    foto: String;
    titulo: String;
    descripcion: String;
    

    constructor (titulo: String, descripcion: String, foto: String){
            this.titulo = titulo;
            this.descripcion = descripcion;
            this.foto = foto;
    }
}