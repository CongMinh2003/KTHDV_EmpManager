import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NhanVien, NhanvienServiceService } from '../../Service/nhanvien-service.service';

@Component({
  selector: 'app-themnhanvien',
  templateUrl: './themnhanvien.component.html',
  styleUrl: './themnhanvien.component.css'
})
export class ThemnhanvienComponent {

  nhanVienForm: FormGroup;
  router: any;

  constructor(
    private fb: FormBuilder,
    private nhanVienService: NhanvienServiceService,
  ) {
    this.nhanVienForm = this.fb.group({
      hoTen: ['', Validators.required],
      ngaySinh: [''],
      soDienThoai: [''],
      email: ['', [Validators.required, Validators.email]],
      diaChi: [''],
      chucVu: [''],
      ngayVaoLam: [''],
    });
  }

  onSubmit() {
    if (this.nhanVienForm.valid) {
      const nhanVien: NhanVien = this.nhanVienForm.value;
      this.nhanVienService.addNhanVien(nhanVien).subscribe({
        next: (data) => {
          alert('Thêm nhân viên thành công!');
          
          this.nhanVienForm.reset();
          this.router.navigate(['/quanlynhanvien']);
        },
        error: (err: any) => {
          console.error('Lỗi khi thêm nhân viên:', err);
          alert('Có lỗi xảy ra!');
        },
      });
    }
  }
}

