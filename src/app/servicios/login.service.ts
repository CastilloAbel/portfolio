import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  log = false;
  constructor() { }

  loguear(){
    this.log = !this.log;
    console.log(this.log ? "esta abierto" : "esta cerrado");
  }
}
