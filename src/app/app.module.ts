import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/index/index.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewEstudioComponent } from './componentes/educacion/new-estudio.component';
import { EditEstudioComponent } from './componentes/educacion/edit-estudio.component';
import { EditProyectosComponent } from './componentes/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './componentes/proyectos/new-proyectos.component';
import { NewSkillsComponent } from './componentes/skills/new-skills.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills.component';
import { EditSobreMiComponent } from './componentes/sobremi/edit-sobre-mi.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    SobremiComponent,
    SkillsComponent,
    ProyectosComponent,
    EducacionComponent,
    ContactoComponent,
    ExperienciaComponent,
    ErrorComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEstudioComponent,
    EditEstudioComponent,
    EditProyectosComponent,
    NewProyectosComponent,
    NewSkillsComponent,
    EditSkillsComponent,
    EditSobreMiComponent,
    SignupComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
