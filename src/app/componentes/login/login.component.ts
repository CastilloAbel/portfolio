import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { LoginService } from 'src/app/servicios/login.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private log:LoginService, private authService:AuthService, private TokenService: TokenService, private router:Router) { 
    this.form=this.formBuilder.group(
      {
         username:['', [Validators.required]],
         password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
         deviceInfo: this.formBuilder.group({
          deviceId: ["17867868768"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificationToken: ["67657575eececc34"]
         })
      }
    )
  }

  ngOnInit(): void {
      if(this.TokenService.getToken()){
        this.isLogged = true;
        this.isLogginFail = false;
        this.roles = this.TokenService.getAuthoriries(); 
      }
  }
  onLogin():void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.TokenService.setToken(data.token);
        this.TokenService.setUserName(data.nombreUsuario);
        this.TokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([""])
        
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      });
  }

 get Username(){
  return this.form.get('username');
 }
 get Password(){
  return this.form.get('password');
 }
  
  actualizarLogin(){
        this.log.loguear()
        this.router.navigate([""])
        
  }
}
