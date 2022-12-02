import { Complain } from 'src/app/models/complain.model';
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

  getUser(id: any): Observable<any> {
    return this.http.get<any>(`${API_URL + 'user'}/${id}`);
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getUserComplainBoard(): Observable<any> {
    return this.http.get(API_URL + 'user/complain', { responseType: 'text' });
  }

  // <--------------------------------------------------------------------------------------------------->


  getModComBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod/complains');
  }

  getModComUserBoard(id: any): Observable<any> {
    return this.http.get(`${API_URL + 'mod/user'}/${id}`);
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getModAllFieldWorker(): Observable<any> {
    return this.http.get(`${API_URL + 'mod/getAllFieldWorker'}`)
  }

  getEngineerBoard(): Observable<any> {
    return this.http.get(API_URL + 'eng', { responseType: 'text' });
  }

  getModComplainById(idC: number): Observable<any> {
    return this.http.get<Complain>(`${API_URL + 'mod/compUpdate'}/${idC}`);
  }

  getModUserInfoById(uId: number): Observable<any> {
    return this.http.get<Complain>(`${API_URL + 'mod/user/'}${uId}`);
  }

  // getModUserInfoById(uId: number): Observable<any> {
  //   return this.http.get<Complain>(`${API_URL + 'mod/user/'}/${uId}`);
  // }

  updateModComplainById(idE: number, idC: number): Observable<any> {
    return this.http.put(`${API_URL + 'mod/compUpdate'}/${idE}`,idC);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${API_URL + 'user'}/${id}`, data);
  }

  // updateModComplain(complain: any, idC: any): Observable<any>{
  //   return this.http.put(`${API_URL + 'mod/compUpdate'}/${idC}`, complain)
  // }

  getAllEngineer(): Observable<any>{
    return this.http.get(`${API_URL + 'mod/getAllEngineer'}`)
  }

  getAllFieldWorker(): Observable<any>{
    return this.http.get(`${API_URL + 'mod/getAllFieldWorker'}`)
  }

  getAllUsers(): Observable<any>{
    return this.http.get(`${API_URL + 'mod/getAllUsers'}`)
  }

  getEngComBoard(idE: number): Observable<any> {
    return this.http.get(`${API_URL + 'eng/'}${idE}/getComplain`);
  }

  getEngAllFieldWorker(): Observable<any>{
    return this.http.get(`${API_URL + 'eng/getAllFieldWorker'}`)
  }

  getEngComUserBoard(id: any): Observable<any> {
    return this.http.get(`${API_URL + 'eng/user'}/${id}`);
  }

  getEngComplainById(idC: number): Observable<any> {
    return this.http.get<Complain>(`${API_URL + 'eng/compUpdate'}/${idC}`);
  }

  updateEngComplainById(idE: number, idC: number): Observable<any> {
    return this.http.put(`${API_URL + 'eng/compUpdate'}/${idE}`,idC);
  }
// -------------------------------------------------------------------------------------------------

  getFldComBoard(idE: number): Observable<any> {
    return this.http.get(`${API_URL + 'fld/'}${idE}/getComplain`);
  }

  getFldComUserBoard(id: any): Observable<any> {
    return this.http.get(`${API_URL + 'fld/user'}/${id}`);
  }

}
