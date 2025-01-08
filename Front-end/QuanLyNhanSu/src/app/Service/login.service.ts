import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8081/api/user/login';

  constructor(private http: HttpClient) {}

  login(userData: { userName: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
