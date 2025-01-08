import { Component } from '@angular/core';
import { NhanvienServiceService } from '../../Service/nhanvien-service.service';

@Component({
  selector: 'app-xoanhanvien',
  templateUrl: './xoanhanvien.component.html',
  styleUrl: './xoanhanvien.component.css'
})
export class XoanhanvienComponent {
  tenNhanVien: string = ''; // Lưu tên nhân viên cần xóa

  constructor(private nhanVienService: NhanvienServiceService) {}

  onDelete() {
    if (this.tenNhanVien) {
      this.nhanVienService.deleteNhanVienByName(this.tenNhanVien).subscribe({
        next: () => {
          alert('Xóa nhân viên thành công!');
          this.tenNhanVien = ''; // Reset giá trị sau khi xóa
        },
        error: (err: any) => {
          console.error('Lỗi khi xóa nhân viên:', err);
          alert('Có lỗi xảy ra hoặc không tìm thấy nhân viên!');
        },
      });
    }
  }
}
