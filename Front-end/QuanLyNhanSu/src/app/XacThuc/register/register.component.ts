import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../Service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private registerService: RegisterService, private router: Router) { }

  onSubmit(registerForm: NgForm) {
    if (registerForm.valid) {
      const { password, confirmPassword, userName } = registerForm.value;

      if (password !== confirmPassword) {
        this.errorMessage = 'Mật khẩu và xác nhận mật khẩu không khớp!';
        this.successMessage = null;
        return;
      }

      const user = {
        userName: userName,
        password: password
      };

      this.registerService.registerUser(user).subscribe(
        (response) => {
          this.successMessage = response.message;
          this.errorMessage = null;
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 1000);
        },
        (error) => {
          this.errorMessage = error.error.message || 'Đã có lỗi xảy ra, vui lòng thử lại!';
          this.successMessage = null;
        }
      );
    }
  }
}
