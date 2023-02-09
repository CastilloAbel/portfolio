import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { MenuService } from 'src/app/servicios/menu.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  persona: persona = new persona("","","","","","","","","","");
  constructor(private personaService:PersonaService, public menu:MenuService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {
      this.persona = data
    })
  }

}
