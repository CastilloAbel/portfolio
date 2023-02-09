import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-edit-estudio',
  templateUrl: './edit-estudio.component.html',
  styleUrls: ['./edit-estudio.component.css']
})
export class EditEstudioComponent implements OnInit {
  est : estudio = null;
  constructor(private sEstudio: EstudioService, private activatedRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.detail(id).subscribe(
      data =>{
        this.est = data;
      }, err =>{
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }
  

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEstudio.update(id, this.est).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }
}
