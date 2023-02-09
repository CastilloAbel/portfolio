import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://monetary-druci-castillokevabel.koyeb.app/personas/'
  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + "traer/perfil");

  }
  public lista(): Observable<persona[]> {
    return this.http.get<persona[]>(this.URL + "lista");
  }
  public detail(id: number): Observable<persona> {
    return this.http.get<persona>(this.URL + `detail/${id}`);
  }
  public update(id: number, trabajo: persona): Observable<any> {
    return this.http.put<any>(this.URL + `update/${id}`, trabajo);
  }


}
