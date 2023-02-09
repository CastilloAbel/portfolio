export class persona{

    id?:number;
    nombre:string;
    apellido:string;
    descripcion:string;
    puesto:string;
    img:string;
    mail:string;
    telefono:string;
    linkedin:string;
    github:string;
    ubicacion:string;

    constructor(nombre: string, apellido: string, descripcion: string, puesto: string ,img: string, mail: string, telefono: string, linkedin: string, github:string, ubicacion:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.puesto = puesto;
        this.img = img;
        this.mail = mail;
        this.telefono = telefono;
        this.linkedin= linkedin;
        this.github = github;
        this.ubicacion = ubicacion;
    }
}