import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  img: string = '';
  link: string = '';
  constructor (private sProyecto: ProyectoService, private router:Router ){}

  ngOnInit(): void {
  }

  onCreate():void{
    const exp = new proyecto(this.nombre, this.link, this.img, this.descripcion);
    this.sProyecto.save(exp).subscribe(
      data=>{
        alert("Proyecto añadido");
        this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
  }
    )
}
}
