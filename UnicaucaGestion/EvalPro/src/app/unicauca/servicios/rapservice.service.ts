import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RA } from '../entidades/ra';



@Injectable({
  providedIn: 'root'
})
export class RAPServiceService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPoint: string = 'http://localhost:8080/api/ra/programa';


  constructor(private http: HttpClient) { }

  getAllRA(): Observable<RA[]> {
    return this.http.get<RA[]>(this.urlEndPoint);
  }

  getRAById(id: number): Observable<RA> {
    return this.http.get<RA>(`${this.urlEndPoint}/${id}`);
  }

  createRA(ra: RA): Observable<RA> {
    return this.http.post<RA>(this.urlEndPoint, ra, { headers: this.httpHeaders });
  }

  updateRA(ra: RA): Observable<RA> {
    return this.http.put<RA>(`${this.urlEndPoint}/${ra.id}`, ra, { headers: this.httpHeaders });
  }

  disableRA(id: number): Observable<RA> {
    return this.http.delete<RA>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }
}
