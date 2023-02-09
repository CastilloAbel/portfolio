import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  nombre: string = '';
  porcentaje: number = null;
  constructor (private sSkill: HabilidadService, private router:Router ){}

  ngOnInit(): void {
  }

  onCreate():void{
    const skill = new habilidad(this.nombre, this.porcentaje);
    this.sSkill.save(skill).subscribe(
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
