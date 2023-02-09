import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trabajo } from 'src/app/model/trabajo.model';
import { TrabajoService } from 'src/app/servicios/trabajo.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';
  institucion: string = '';
  fechaDesde: string = '';
  fechaHasta: string = '';
  constructor (private sExperiencia: TrabajoService, private router:Router ){}

  ngOnInit(): void {
  }

  onCreate():void{
    const exp = new trabajo(this.nombreE, this.descripcionE, this.institucion, this.fechaDesde, this.fechaHasta);
    this.sExperiencia.save(exp).subscribe(
      data=>{
        ("Experiencia añadida");
        this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
  }
    )
}
}