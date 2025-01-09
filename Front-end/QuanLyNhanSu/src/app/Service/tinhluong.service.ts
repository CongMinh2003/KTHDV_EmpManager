import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Employee {
  name: string;
  salary: number;
  bonus: number;
  deduction: number;
}

@Injectable({
  providedIn: 'root'
})
export class TinhluongService {

  private apiUrl = 'http://localhost:8087/api/tinhluong/employees';  // Địa chỉ API của backend

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}