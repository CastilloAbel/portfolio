import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-new-estudio',
  templateUrl: './new-estudio.component.html',
  styleUrls: ['./new-estudio.component.css']
})
export class NewEstudioComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  institucion: string = '';
  fechaDesde: string = '';
  fechaHasta: string = '';
  constructor (private sEstudio: EstudioService, private router:Router ){}

  ngOnInit(): void {
  }

  onCreate():void{
    const est = new estudio(this.nombreE, this.descripcionE, this.institucion, this.fechaDesde, this.fechaHasta);
    this.sEstudio.save(est).subscribe(
      data=>{
        ("Educacion añadida");
        this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
  }
    )
}
}
