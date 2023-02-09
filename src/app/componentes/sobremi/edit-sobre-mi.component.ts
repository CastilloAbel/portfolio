import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-edit-sobre-mi',
  templateUrl: './edit-sobre-mi.component.html',
  styleUrls: ['./edit-sobre-mi.component.css']
})
export class EditSobreMiComponent implements OnInit {
per: persona = null;
  constructor(private sPersona: PersonaService, private activatedRouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data =>{
        this.per = data;
      }, err =>{
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.update(id, this.per).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al modificar la persona");
        this.router.navigate(['']);
      }
    )
  }
}
