import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserSheet } from '../../Models/UserSheet';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = `${environment.API}`;

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addData(rowData: UserSheet): Observable<any> {
    return this.http.post<any>(this.apiUrl, rowData);
  }
}
