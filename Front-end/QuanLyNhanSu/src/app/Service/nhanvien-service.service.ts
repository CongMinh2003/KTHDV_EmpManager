import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



export interface NhanVien {
  id?: number;
  hoTen: string;
  ngaySinh?: string; 
  soDienThoai?: string;
  email?: string;
  diaChi?: string;
  chucVu?: string;
  ngayVaoLam?: string; 
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

  getNhanVienByName(hoTen: string): Observable<NhanVien> {
    return this.http.get<NhanVien>(`${this.apiUrl}/find-by-name/${encodeURIComponent(hoTen)}`);
  }

  // Cập nhật thông tin nhân viên
  updateNhanVien(nhanVien: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/nhanvien/updatenhanvien/${nhanVien.id}`, nhanVien);
  }

  deleteNhanvien(id : number):Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/nhanvien/deletenhanvien/${id}`)
  }
  
}