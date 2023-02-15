import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  nombreUsuario: string = '';
  email: string = '';
  password: string = '';
  name: string = '';
  user: NuevoUsuario;
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private authService:AuthService,private router:Router) { 
    this.form=this.formBuilder.group(
      {
         username:['', [Validators.required]],
         password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
         email:['', [Validators.required, Validators.email]],
         name:['', [Validators.required]],
         deviceInfo: this.formBuilder.group({
          deviceId: ["17867868768"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificationToken: ["67657575eececc34"]
         })
      }
    )
  }

  ngOnInit(): void {
    alert("Lo siento. El registro ha sido deshabilitado temporalmente.");
    this.router.navigate([""])
  }
  onSignUp():void{
    this.user = new NuevoUsuario(this.name, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.user).subscribe(data =>{
        this.router.navigate([""])
        alert("Usuario creado con exito");
      }, err =>{
        console.log("falló");
      });
  }

 get Username(){
  return this.form.get('username');
 }
 get Password(){
  return this.form.get('password');
 }
 get Name(){
  return this.form.get('name');
 }
 get Email(){
  return this.form.get('email');
  
}
}