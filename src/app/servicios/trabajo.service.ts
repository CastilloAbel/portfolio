import { getLocaleEraNames } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { trabajo } from '../model/trabajo.model';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {
  URL = 'https://thoughtless-livvie-castillokevabel.koyeb.app/trabajos/'

  constructor(private http: HttpClient) { }

  public lista():Observable<trabajo[]>{
    return this.http.get<trabajo[]>(this.URL + "lista");
  }
  public detail(id: number): Observable<trabajo>{
    return this.http.get<trabajo>(this.URL + `detail/${id}`);
  }
  public save(trabajo: trabajo): Observable<any>{
    return this.http.post<any>(this.URL + 'create', trabajo);
  }
  public update(id: number, trabajo: trabajo):Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, trabajo);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
  
  public getTrabajo():Observable<trabajo[]>{
    return this.http.get<trabajo[]>(this.URL + 'traer');
  }
}
