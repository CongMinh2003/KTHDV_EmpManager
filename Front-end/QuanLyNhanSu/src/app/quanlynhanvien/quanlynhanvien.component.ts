import { Component, OnInit } from '@angular/core';
import { NhanVien, NhanvienServiceService } from '../Service/nhanvien-service.service';

@Component({
  selector: 'app-quanlynhanvien',
  templateUrl: './quanlynhanvien.component.html',
  styleUrl: './quanlynhanvien.component.css'
})
export class QuanlynhanvienComponent implements OnInit {


  searchTerm: string = ''; 
  employees: NhanVien[] = []; // Danh sách nhân viên sau khi tìm kiếm
  
  selectedEmployee: NhanVien | null = null
  constructor(private nhanVienService: NhanvienServiceService) {}

  ngOnInit(): void {
    this.getAllEmployees(); 
  }

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

  editEmployee(employee: NhanVien): void {
    this.selectedEmployee = { ...employee }; // Sao chép thông tin nhân viên để chỉnh sửa
  }

  saveEmployee(): void {
    if (this.selectedEmployee) {
      console.log(this.selectedEmployee);
      this.nhanVienService.updateNhanVien(this.selectedEmployee).subscribe(() => {
        this.getAllEmployees(); 
        this.selectedEmployee = null; 
      });
    }
  }
  deleteNhanvien(id : number):void{
    if(confirm('bạn có chắc muốn xóa')){
      this.nhanVienService.deleteNhanvien(id).subscribe(
        res =>{
          alert("xóa thành công");
          this.getAllEmployees();
        }
      )
    }
  }

}