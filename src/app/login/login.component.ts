import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { LoginRequest } from '../models/loginRequest.model';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginRequest: LoginRequest = {email: '', password: ''};
  jwt: any;
  ownerList: Owner[] = [];
  ownerId: number = 0;
  
  constructor(private router: Router, private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getAllOwners().subscribe((owners: any) => {
      this.ownerList = owners;
      console.log(owners);
    });
  }

  onSubmit() {
    this.apiService.login(this.loginRequest).subscribe((data: any) => 
      {
        localStorage.setItem('jwt', data.message);
        console.log(data.message);

        if (this.hasJWT() == true) {
          let loggedInOwner = this.ownerList.find(owner => owner.email === this.loginRequest.email)
          if (loggedInOwner) {
            this.ownerId = loggedInOwner.id;
            this.router.navigate(['/owners', this.ownerId]);  
          }
        }
      });
  }

  hasJWT(): boolean {
    let jwt = localStorage.getItem('jwt');
    return jwt !== null && jwt !== undefined && jwt !== '';
  }
}
