import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  pro : proyecto = null;
  constructor(private sProyecto: ProyectoService, private activatedRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      data =>{
        this.pro = data;
      }, err =>{
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }
  

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.pro).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
