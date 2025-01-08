// import { Component } from '@angular/core';
// import { NhanVien, NhanvienServiceService } from '../../Service/nhanvien-service.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-chinhsuanhanvien',
//   templateUrl: './chinhsuanhanvien.component.html',
//   styleUrl: './chinhsuanhanvien.component.css'
// })
// export class ChinhsuanhanvienComponent {
//   editForm: FormGroup;
//   employeeId: number | null = null;;

//   constructor(
//     private fb: FormBuilder,
//     private nhanVienService: NhanvienServiceService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {
//     this.editForm = this.fb.group({
//       hoTen: ['', Validators.required],
//       ngaySinh: [''],
//       soDienThoai: [''],
//       email: ['', [Validators.required, Validators.email]],
//       diaChi: [''],
//       chucVu: [''],
//       ngayVaoLam: [''],
//     });
//   }

//   ngOnInit() {
//     // Lấy ID nhân viên từ URL
//     this.employeeId = +this.route.snapshot.paramMap.get('id');
    
//     // Tải thông tin nhân viên để chỉnh sửa
//     this.loadEmployeeDetails();
//   }

//   loadEmployeeDetails() {
//     this.nhanVienService.getNhanVienById(this.employeeId).subscribe((data: NhanVien) => {
//       this.editForm.patchValue({
//         hoTen: data.hoTen,
//         ngaySinh: data.ngaySinh,
//         soDienThoai: data.soDienThoai,
//         email: data.email,
//         diaChi: data.diaChi,
//         chucVu: data.chucVu,
//         ngayVaoLam: data.ngayVaoLam,
//       });
//     });
//   }

//   onSubmit() {
//     if (this.editForm.valid) {
//       const updatedEmployee: NhanVien = this.editForm.value;
//       updatedEmployee.id = this.employeeId;

//       this.nhanVienService.updateNhanVien(updatedEmployee).subscribe({
//         next: () => {
//           alert('Chỉnh sửa thông tin nhân viên thành công!');
//           this.router.navigate(['/quanlynhanvien']);
//         },
//         error: (err: any) => {
//           console.error('Lỗi khi chỉnh sửa nhân viên:', err);
//           alert('Có lỗi xảy ra!');
//         }
//       });
//     }
//   }
// }

// import { Component } from '@angular/core';
// import { NhanVien, NhanvienServiceService } from '../../Service/nhanvien-service.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-chinhsuanhanvien',
//   templateUrl: './chinhsuanhanvien.component.html',
//   styleUrl: './chinhsuanhanvien.component.css'
// })
// export class ChinhsuanhanvienComponent {
//   editForm: FormGroup;
//   employeeId: number | undefined;  // Khai báo employeeId là số

//   constructor(
//     private fb: FormBuilder,
//     private nhanVienService: NhanvienServiceService,
//     private route: ActivatedRoute,
//     private router: Router
//   ) {
//     this.editForm = this.fb.group({
//       hoTen: ['', Validators.required],
//       ngaySinh: [''],
//       soDienThoai: [''],
//       email: ['', [Validators.required, Validators.email]],
//       diaChi: [''],
//       chucVu: [''],
//       ngayVaoLam: [''],
//     });
//   }

//   ngOnInit() {
//     // Lấy ID nhân viên từ URL
//     const id = this.route.snapshot.paramMap.get('id');
    
//     if (id) {
//       this.employeeId = +id;  // Chuyển sang kiểu number
//       // Tải thông tin nhân viên để chỉnh sửa
//       this.loadEmployeeDetails();
//     } else {
//       alert('Không tìm thấy thông tin nhân viên.');
//       this.router.navigate(['/quanlynhanvien']);
//     }
//   }

//   loadEmployeeDetails() {
//     if (this.employeeId) {
//       this.nhanVienService.getNhanVienById(this.employeeId).subscribe((data: NhanVien) => {
//         this.editForm.patchValue({
//           hoTen: data.hoTen,
//           ngaySinh: data.ngaySinh,
//           soDienThoai: data.soDienThoai,
//           email: data.email,
//           diaChi: data.diaChi,
//           chucVu: data.chucVu,
//           ngayVaoLam: data.ngayVaoLam,
//         });
//       });
//     }
//   }

//   onSubmit() {
//     if (this.editForm.valid) {
//       const updatedEmployee: NhanVien = this.editForm.value;
//       updatedEmployee.id = this.employeeId;

//       this.nhanVienService.updateNhanVien(updatedEmployee).subscribe({
//         next: () => {
//           alert('Chỉnh sửa thông tin nhân viên thành công!');
//           this.router.navigate(['/quanlynhanvien']);
//         },
//         error: (err: any) => {
//           console.error('Lỗi khi chỉnh sửa nhân viên:', err);
//           alert('Có lỗi xảy ra!');
//         }
//       });
//     }
//   }
// }


import { Component } from '@angular/core';
import { NhanVien, NhanvienServiceService } from '../../Service/nhanvien-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chinhsuanhanvien',
  templateUrl: './chinhsuanhanvien.component.html',
  styleUrls: ['./chinhsuanhanvien.component.css']
})
export class ChinhsuanhanvienComponent {
  editForm: FormGroup;
  hoTen: string = '';  // Tên nhân viên

  constructor(
    private fb: FormBuilder,
    private nhanVienService: NhanvienServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      hoTen: ['', Validators.required],
      ngaySinh: [''],
      soDienThoai: [''],
      email: ['', [Validators.required, Validators.email]],
      diaChi: [''],
      chucVu: [''],
      ngayVaoLam: [''],
    });
  }

  ngOnInit() {
    // Lấy tên nhân viên từ URL (nếu có)
    this.hoTen = this.route.snapshot.paramMap.get('hoTen') || ''; 
    
    // Tải thông tin nhân viên để chỉnh sửa
    this.loadEmployeeDetails();
  }

  loadEmployeeDetails() {
    // Sử dụng tên nhân viên để tìm kiếm thông tin nhân viên
    this.nhanVienService.getNhanVienByName(this.hoTen).subscribe((data: NhanVien) => {
      this.editForm.patchValue({
        hoTen: data.hoTen,
        ngaySinh: data.ngaySinh,
        soDienThoai: data.soDienThoai,
        email: data.email,
        diaChi: data.diaChi,
        chucVu: data.chucVu,
        ngayVaoLam: data.ngayVaoLam,
      });
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      const updatedEmployee: NhanVien = this.editForm.value;

      this.nhanVienService.updateNhanVien(updatedEmployee).subscribe({
        next: () => {
          alert('Chỉnh sửa thông tin nhân viên thành công!');
          this.router.navigate(['/quanlynhanvien']);
        },
        error: (err: any) => {
          console.error('Lỗi khi chỉnh sửa nhân viên:', err);
          alert('Có lỗi xảy ra!');
        }
      });
    }
  }
}
