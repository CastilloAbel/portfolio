import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { trabajo } from 'src/app/model/trabajo.model';
import { TrabajoService } from 'src/app/servicios/trabajo.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  exp : trabajo = null;
  constructor(private sExperiencia: TrabajoService, private activatedRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.exp = data;
      }, err =>{
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }
  

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.exp).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

}