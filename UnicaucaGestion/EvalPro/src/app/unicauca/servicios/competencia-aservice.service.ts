import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competencia} from '../entidades/competencia'; 
import {RA} from '../entidades/ra';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaAServiceService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPoint: string = 'http://localhost:8080/api/competencia/programa';
  

  constructor(private http: HttpClient) { }

  getAllCompetencias(): Observable<Competencia[]> {
    return this.http.get<Competencia[]>(this.urlEndPoint);
  }

  getCompetenciaById(id: number): Observable<Competencia> {
    return this.http.get<Competencia>(`${this.urlEndPoint}/${id}`);
  }

  createCompetencia(competencia: Competencia): Observable<Competencia> {
    return this.http.post<Competencia>(this.urlEndPoint, competencia);
  }

  updateCompetencia(id: number, competencia: Competencia): Observable<Competencia> {
    return this.http.put<Competencia>(`${this.urlEndPoint}/${id}`, competencia);
  }

  disableCompetencia(id: number): Observable<Competencia> {
    return this.http.delete<Competencia>(`${this.urlEndPoint}/${id}`);
  }

  getRAsByCompetenciaId(id: number): Observable<RA[]> {
    return this.http.get<RA[]>(`${this.urlEndPoint}/${id}/resultados`);
  }
}
