import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserSheet } from '../../Models/UserSheet';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{
  private apiUrl = 'https://backend-formulario-precadastro.vercel.app/api/data';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addData(rowData: UserSheet): Observable<any> {
    return this.http.post<any>(this.apiUrl, rowData);
  }
}
