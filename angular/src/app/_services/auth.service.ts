import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly serverUrl = 'https://localhost:8000/';
  readonly authentication_token = 'authentication_token';
  readonly httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      this.serverUrl + this.authentication_token,
      {
        email,
        password,
      },
      this.httpOptions
    );
  }
}