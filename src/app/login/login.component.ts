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

  /**
   * Initializes the LoginComponent.
   * Retrieves the list of owners from the API service.
   */
  ngOnInit(){
    this.apiService.getAllOwners().subscribe((owners: any) => {
      this.ownerList = owners;
      console.log(owners);
    });
  }

  /**
   * Handles the form submission event.
   * Performs user login by calling the API service's login method.
   * Stores the email and JWT in the local storage.
   * Navigates to the owner's page if login is successful.
   */
  onSubmit() {
    this.apiService.login(this.loginRequest).subscribe((data: any) => 
      {
        localStorage.setItem('email', this.loginRequest.email);
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

  /**
   * Checks if a JSON Web Token (JWT) is present in the local storage.
   * @returns A boolean indicating whether a JWT is present.
   */
  hasJWT(): boolean {
    let jwt = localStorage.getItem('jwt');
    return jwt !== null && jwt !== undefined && jwt !== '';
  }
}
