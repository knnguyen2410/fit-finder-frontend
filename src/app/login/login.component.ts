import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoginRequest } from '../models/loginRequest.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRequest: LoginRequest = {email: '', password: ''};
  jwt: any;
  
  constructor(private apiService: ApiService){}

  onSubmit() {
    this.apiService.login(this.loginRequest).subscribe((data: any) => 
      {
        localStorage.setItem('jwt', data.message);
      });
  }
}
