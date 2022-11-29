import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complain } from '../models/complain.model';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Complain[]> {
    return this.http.get<Complain[]>(API_URL + 'complains');
  }

  get(id: any): Observable<Complain> {
    return this.http.get<Complain>(`${API_URL + 'complains'}/${id}`);
  }

  create(id: any,data: any): Observable<any> {
    return this.http.post(`${API_URL + 'user'}/${id}/complains`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${API_URL + 'complains'}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${API_URL + 'complains'}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(API_URL + 'complains');
  }

  findByTitle(title: any): Observable<Complain[]> {
    return this.http.get<Complain[]>(`${API_URL + 'complains'}?title=${title}`);
  }
}
