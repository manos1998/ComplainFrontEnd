import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  forgetPassword(email: string):Observable<any> {
    return this.http.post(
      AUTH_API + 'forgot_password',{
        email
      },
      httpOptions
    );
  }

  resetPassword(token: string, email: string, password: string ):Observable<any> {
    console.log("Token " + token);
    console.log("Email " + email);
    console.log("Password " + password);
    
    return this.http.post(
      AUTH_API + 'reset_password',
      {
        token,
        email,
        password,
      },
      httpOptions
    );
    // return this.http.post(`${AUTH_API + 'reset_password'}`,password);
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
