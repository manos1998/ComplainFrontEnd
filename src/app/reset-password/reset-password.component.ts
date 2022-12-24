import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  form: any = {
    token: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isResetPasswordFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.form.token = params['token']);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { token, email, password } = this.form;
    this.authService.resetPassword(token, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isResetPasswordFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isResetPasswordFailed = true;
      }
    });
  }
}