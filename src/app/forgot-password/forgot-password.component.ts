import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  form: any = {
    email: null,
  };
  isSuccessful = false;
  isForgetPasswordFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const email = this.form.email;
    this.authService.forgetPassword(email).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isForgetPasswordFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isForgetPasswordFailed = true;
      }
    })
  }
}
