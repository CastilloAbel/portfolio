import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { LoginService } from 'src/app/servicios/login.service';
import { MenuService } from 'src/app/servicios/menu.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLogged = false;
  persona: persona = new persona("","","","","","","","","","");
  constructor(public log:LoginService, public router:Router, private tokenService:TokenService, public personaService: PersonaService, public menu:MenuService) { 
  }
  ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
      this.personaService.getPersona().subscribe(data => {
        this.persona = data
      })
  }
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  irLogin(){
    this.router.navigate(['login']);
  }
}
