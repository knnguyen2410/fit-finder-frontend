import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/loginRequest.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRequest: LoginRequest = {email: '', password: ''};
  jwt: any;
  
  constructor(private router: Router, private apiService: ApiService){}

  onSubmit() {
    this.apiService.login(this.loginRequest).subscribe((data: any) => 
      {
        localStorage.setItem('jwt', data.message);
        console.log(data.message);

        if (this.hasJWT() == true) {
          this.router.navigate(['']);
        }
      });
  }

  hasJWT(): boolean {
    let jwt = localStorage.getItem('jwt');
    return jwt !== null && jwt !== undefined && jwt !== '';
  }
}
