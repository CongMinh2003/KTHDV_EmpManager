import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:8081/api/user/register';

  constructor(private http: HttpClient) { }

  registerUser(user: { userName: string, password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
