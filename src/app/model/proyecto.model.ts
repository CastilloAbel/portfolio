export class proyecto{

    id?:number;
    nombre:string;
    link:string;
    img:string;
    descripcion:string;



    constructor(nombre: string,link: string, img: string, descripcion: string){
        this.nombre = nombre;
        this.link = link;
        this.img = img;
        this.descripcion = descripcion;

    }
}