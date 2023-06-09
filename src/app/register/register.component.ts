import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ownerList: Owner[] = [];

  // The owner data for registration.
  owner: Owner = {
    id: 0,
    name: '',
    email: '',
    password: '',
    image: ''
  }

  /**
   * Creates an instance of the RegisterComponent.
   * @param router The router service.
   * @param apiService The API service for making requests.
   */
  constructor(private router: Router, private apiService: ApiService){}

  /**
   * Lifecycle hook that is called after the component is initialized.
   * Retrieves the list of owners from the API.
   */
  ngOnInit(){
    this.apiService.getAllOwners().subscribe((owners: any) => {
      this.ownerList = owners;
      console.log(owners);
    });
  }

  /**
   * Handles the form submission for owner registration.
   * Calls the API service to register the owner.
   * If registration is successful, navigates to the owner login page.
   */
  onSubmit() {
    this.apiService.register(this.owner).subscribe((response: any) => {
      console.log(response);
      console.log(this.owner);

      if (response.id !== 0) {
        this.router.navigate(['/owners/login']);
      }
    });
  }  
}
