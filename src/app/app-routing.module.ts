import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEstudioComponent } from './componentes/educacion/edit-estudio.component';
import { NewEstudioComponent } from './componentes/educacion/new-estudio.component';
import { ErrorComponent } from './componentes/error/error.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditProyectosComponent } from './componentes/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './componentes/proyectos/new-proyectos.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { EditSkillsComponent } from './componentes/skills/edit-skills.component';
import { NewSkillsComponent } from './componentes/skills/new-skills.component';
import { EditSobreMiComponent } from './componentes/sobremi/edit-sobre-mi.component';

const routes: Routes = [
{path:'',redirectTo:'index', pathMatch:'full'},
{path:'index', component:IndexComponent},
{path:'login', component:LoginComponent},
{path: 'nuevaexp', component:NewExperienciaComponent},
{path: 'editexp/:id', component: EditExperienciaComponent},
{path: 'newskill', component: NewSkillsComponent},
{path: 'editskill/:id', component: EditSkillsComponent},
{path: 'editsobremi/:id', component: EditSobreMiComponent},
{path: 'editproyecto/:id', component: EditProyectosComponent},
{path: 'newproyecto', component: NewProyectosComponent},
{path: 'editestudio/:id', component: EditEstudioComponent},
{path: 'newestudio', component: NewEstudioComponent},
{path: 'signup', component: SignupComponent},
{path:'**', redirectTo:'404', pathMatch:'full'},
{path:'404', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
