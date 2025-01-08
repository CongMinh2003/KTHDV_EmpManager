import { Component, OnInit } from '@angular/core';
import { NhanVien, NhanvienServiceService } from '../Service/nhanvien-service.service';

@Component({
  selector: 'app-quanlynhanvien',
  templateUrl: './quanlynhanvien.component.html',
  styleUrl: './quanlynhanvien.component.css'
})
export class QuanlynhanvienComponent implements OnInit {
  // employees: any[] = [];
  // searchTerm: string = '';

  searchTerm: string = ''; // Dữ liệu nhập để tìm kiếm
  employees: NhanVien[] = []; // Danh sách nhân viên sau khi tìm kiếm

  constructor(private nhanVienService: NhanvienServiceService) {}

  // ngOnInit(): void {
  //   this.getEmployees();
  // }

  // getEmployees() {
  //   this.nhanVienService.getEmployees().subscribe((data) => {
  //     // console.log(data);
  //     this.employees = data;
  //   });
  // }

  ngOnInit(): void {
    this.getAllEmployees(); // Lấy tất cả nhân viên khi tải trang
  }

  // Lấy danh sách tất cả nhân viên
  getAllEmployees() {
    this.nhanVienService.getEmployees().subscribe({
      next: (data) => (this.employees = data),
      error: (err) => console.error('Lỗi khi lấy danh sách nhân viên:', err)
    });
  }

  // Tìm kiếm nhân viên dựa trên tên
  searchEmployees() {
    if (this.searchTerm.trim() === '') {
      this.getAllEmployees(); // Nếu không nhập tìm kiếm, hiển thị tất cả
      return;
    }

    this.nhanVienService.searchNhanVienByName(this.searchTerm).subscribe({
      next: (data) => (this.employees = data),
      error: (err) => {
        console.error('Lỗi khi tìm kiếm nhân viên:', err);
        alert('Không tìm thấy nhân viên!');
        this.employees = [];
      }
    });
  }


}