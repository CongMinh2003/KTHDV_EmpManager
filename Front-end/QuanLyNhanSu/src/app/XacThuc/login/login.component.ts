import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string | null = null;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  onSubmit(loginForm: any) {
    if (loginForm.valid) {
      const userData = loginForm.value;

      this.loginService.login(userData).subscribe(
        response => {
          if (response.token) {
            console.log('Login successful:', response);
            localStorage.setItem('auth_token', response.token);
            this.router.navigate(['/quanlynhanvien']);
          } else {
            this.errorMessage = response.message;
          }
        },
        error => {
          console.error('Login failed:', error);
          this.errorMessage = 'Đã xảy ra lỗi hệ thống, vui lòng thử lại sau.';
        }
      );
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
