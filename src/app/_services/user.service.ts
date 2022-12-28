import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getEngineerBoard(): Observable<any> {
    return this.http.get(API_URL + 'eng', { responseType: 'text' });
  }

  getFieldWorkerBoard(): Observable<any> {
    return this.http.get(API_URL + 'fld', { responseType: 'text' });
  }

  getAdminUsersBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin/users');
  }

  deleteUser(uId: number): Observable<any> {
    return this.http.delete(`${API_URL + 'admin/user/deleteUser/'}${uId}`)
  }

  updateAdminUpdate(uId: number,user: any): Observable<any> {
    // return this.http.put(`${API_URL + 'admin/user/deleteUser/'}`,user);
    return this.http.put(`${API_URL + 'admin/user/updateUser/'}${uId}`,user)
  }

  createUserBoard(user: any): Observable<any> {
    return this.http.post(`${API_URL + 'admin/user/createUser'}`, user)
  }

  getUserInfoById(uId: number): Observable<any> {
    return this.http.get(`${API_URL + 'admin/user/'}${uId}`);
  }

  getUsersRoles(): Observable<any> {
    return this.http.get(API_URL + 'admin/roles');
  }

}
