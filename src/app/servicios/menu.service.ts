import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  isAbierto: boolean= false;
  constructor() {   }
  tocarMenu(){
    this.isAbierto = !this.isAbierto;
  }
}
