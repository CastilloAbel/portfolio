import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  providers: [NgbCarouselConfig]
})
export class ProyectosComponent implements OnInit {
  @ViewChild('ngcarousel', { static: true }) ngCarousel: NgbCarousel;
  proyecto: proyecto[] = [];
  constructor(public proyectoService:ProyectoService, private tokenService: TokenService, private router:Router, private config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
   }
  isLogged = false;
  ngOnInit(): void {
    this.proyectoService.lista().subscribe(data=> this.proyecto = data);
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }


  delete(id?:number){
    if(id != undefined){
      this.proyectoService.delete(id).subscribe(
        data =>{
          this.proyectoService.lista().subscribe(data=> this.proyecto = data)
        }, err => {
          alert("No se pudo borrar el proyecto");
        }
      )
    }  
  
  }
  editar(id: number){
    this.router.navigate([`/editproyecto/${id}`]);
  }
  // Move to specific slide
  navigateToSlide(item:any) {
    this.ngCarousel.select(item);
    console.log(item)
  }

  // Move to previous slide
  getToPrev() {
    this.ngCarousel.prev();
  }

  // Move to next slide
  goToNext() {
    this.ngCarousel.next();
  }

  // Pause slide
  stopCarousel() {
    this.ngCarousel.pause();
  }

  // Restart carousel
  restartCarousel() {
    this.ngCarousel.cycle();
  }
  irProyecto(link:string){
    this.router.navigate([link]);
  }
}
