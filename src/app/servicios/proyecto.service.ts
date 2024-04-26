import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = 'https://thoughtless-livvie-castillokevabel.koyeb.app/proyectos/'
  constructor(private http:HttpClient) { }
  public getProyecto():Observable<proyecto[]>{
    return this.http.get<proyecto[]>(this.URL + 'traer');
  }
  public lista():Observable<proyecto[]>{
    return this.http.get<proyecto[]>(this.URL + "lista");
  }
  public detail(id: number): Observable<proyecto>{
    return this.http.get<proyecto>(this.URL + `detail/${id}`);
  }
  public save(proyecto: proyecto): Observable<any>{
    return this.http.post<any>(this.URL + 'create', proyecto);
  }
  public update(id: number, proyecto: proyecto):Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
