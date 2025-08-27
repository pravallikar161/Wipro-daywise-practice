import { Component } from '@angular/core';
import { Loginservice } from '../../services/loginservice';
import { Router } from '@angular/router';
import { Ilogin } from '../../interfaces/ilogin';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private loginService: Loginservice, private router: Router) {}

  login() {
    const loginReq: Ilogin = {
      email: this.email,
      passWord: this.password,
    };

    this.loginService.login(loginReq).subscribe({
      next: (res) => {
        this.loginService.saveToken(res.token);
        console.log(res.token);

        alert('Login successful!');
        this.router.navigate(['/food']);
      },
      error: () => {
        alert('Invalid email or password!');
      },
    });
  }
}
