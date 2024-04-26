import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidad } from '../model/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  URL = 'https://thoughtless-livvie-castillokevabel.koyeb.app/skill/'
  constructor(private http: HttpClient) { }

  public getHabilidad():Observable<habilidad[]>{
    return this.http.get<habilidad[]>(this.URL + 'traer');
  }
  public lista():Observable<habilidad[]>{
    return this.http.get<habilidad[]>(this.URL + "lista");
  }
  public detail(id: number): Observable<habilidad>{
    return this.http.get<habilidad>(this.URL + `detail/${id}`);
  }
  public save(skill: habilidad): Observable<any>{
    return this.http.post<any>(this.URL + 'create', skill);
  }
  public update(id: number, skill: habilidad):Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
  
}
