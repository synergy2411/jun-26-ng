import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private authService = inject(AuthService);

  onSubmit(loginForm: NgForm) {
    console.log('Username : ', loginForm.value);
    debugger;
    this.authService.onUserLogin({
      email: loginForm.value.username,
      password: loginForm.value.password,
    });
  }
}
