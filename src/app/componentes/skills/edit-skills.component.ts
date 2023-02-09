import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit {
  skill:habilidad = null;
  constructor(private sSkill:HabilidadService, private activatedRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.detail(id).subscribe(
      data =>{
        this.skill = data;
      }, err =>{
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill.update(id, this.skill).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }
}
