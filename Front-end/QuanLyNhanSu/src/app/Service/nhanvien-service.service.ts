import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



export interface NhanVien {
  id?: number;
  hoTen: string;
  ngaySinh?: string; // ISO format string (YYYY-MM-DD)
  soDienThoai?: string;
  email?: string;
  diaChi?: string;
  chucVu?: string;
  ngayVaoLam?: string; // ISO format string
}

@Injectable({
  providedIn: 'root'
})
export class NhanvienServiceService {private apiUrl = 'http://localhost:8080/api/nhanvien'; // URL API từ back-end

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  searchNhanVienByName(name: string): Observable<NhanVien[]> {
    return this.http.get<NhanVien[]>(`${this.apiUrl}/search/${encodeURIComponent(name)}`);
  }
  
  addNhanVien(nhanVien: NhanVien): Observable<NhanVien> {
    return this.http.post<NhanVien>(this.apiUrl, nhanVien);
  }

  deleteNhanVienByName(hoTen: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-by-name/${encodeURIComponent(hoTen)}`);
  }

  getNhanVienByName(hoTen: string): Observable<NhanVien> {
    return this.http.get<NhanVien>(`${this.apiUrl}/find-by-name/${encodeURIComponent(hoTen)}`);
  }

  // Cập nhật thông tin nhân viên
  updateNhanVien(nhanVien: NhanVien): Observable<NhanVien> {
    return this.http.put<NhanVien>(`${this.apiUrl}/${nhanVien.id}`, nhanVien);
  }

  
}