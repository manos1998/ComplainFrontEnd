import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getUserComplainBoard(): Observable<any> {
    return this.http.get(API_URL + 'user/complain', { responseType: 'text' });
  }

  get(id: any): Observable<any> {
    return this.http.get<any>(`${API_URL + 'user'}/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${API_URL + 'user'}/${id}`, data);
  }
}
