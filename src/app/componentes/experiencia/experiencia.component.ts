import { Component, OnInit } from '@angular/core';
import { trabajo } from 'src/app/model/trabajo.model';
import { TokenService } from 'src/app/servicios/token.service';
import { TrabajoService } from 'src/app/servicios/trabajo.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
experiencia: trabajo[] = [];
  constructor(public trabajoService:TrabajoService, private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    this.cargarTrabajo();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  cargarTrabajo():void{
    this.trabajoService.lista().subscribe(data=> this.experiencia = data);
  }

  delete(id?:number){
    if(id != undefined){
      this.trabajoService.delete(id).subscribe(
        data =>{
          this.cargarTrabajo();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }  
  
  }
}
