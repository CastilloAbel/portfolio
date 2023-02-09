export class trabajo{

    id?:number;
    nombreE:string;
    descripcionE:string;
    institucion:string;
    fechaDesde:string;
    fechaHasta:string;


    constructor(nombreE: string,descripcionE: string, institucion: string, fechaDesde: string, fechaHasta: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.institucion = institucion;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;

    }
}