import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidad: habilidad[] = [];
  constructor(public skillsService:HabilidadService, private tokenService: TokenService, private router: Router) { }
  isLogged = false;
  ngOnInit(): void {
    this.skillsService.getHabilidad().subscribe(data=> this.habilidad = data);
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  delete(id?:number){
    if(id != undefined){
      this.skillsService.delete(id).subscribe(
        data =>{
          this.skillsService.lista().subscribe(data=> this.habilidad = data);
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }  
  
  }
  editar(id:number){
    this.router.navigate([`editskill/${id}`]);
  }
}
