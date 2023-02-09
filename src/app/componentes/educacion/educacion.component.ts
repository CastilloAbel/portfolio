import { Component, OnInit } from '@angular/core';
import { estudio } from 'src/app/model/estudio.model';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  estudio: estudio[] = [];
  constructor(public estudioService:EstudioService, private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    this.estudioService.lista().subscribe(data=> this.estudio = data);
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }


  delete(id?:number){
    if(id != undefined){
      this.estudioService.delete(id).subscribe(
        data =>{
          this.estudioService.lista().subscribe(data=> this.estudio = data);
        }, err => {
          alert("No se pudo borrar el estudio");
        }
      )
    }  
  
  }
}
