export class estudio{

    id?:number;
    nombreE:String;
    descripcionE:String;
    institucion:String;
    fechaDesde:String;
    fechaHasta:String;


    constructor(nombreE: string,descripcionE: string, institucion: string, fechaDesde: string, fechaHasta: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.institucion = institucion;
        this.fechaDesde = fechaDesde;
        this.fechaHasta = fechaHasta;

    }
}