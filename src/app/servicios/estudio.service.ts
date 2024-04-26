import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { estudio } from '../model/estudio.model';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  URL = 'https://thoughtless-livvie-castillokevabel.koyeb.app/estudio/'
  constructor(private http:HttpClient) { }

  public getEstudio():Observable<estudio[]>{
    return this.http.get<estudio[]>(this.URL + 'traer');
  }
  public lista():Observable<estudio[]>{
    return this.http.get<estudio[]>(this.URL + "lista");
  }
  public detail(id: number): Observable<estudio>{
    return this.http.get<estudio>(this.URL + `detail/${id}`);
  }
  public save(estudio: estudio): Observable<any>{
    return this.http.post<any>(this.URL + 'create', estudio);
  }
  public update(id: number, estudio: estudio):Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, estudio);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}
