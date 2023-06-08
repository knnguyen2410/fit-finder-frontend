import { Component, OnInit } from '@angular/core';
import { Gym } from '../models/gym.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Owner } from '../models/owner.model';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent implements OnInit {
  ownerList: Owner[] = [];

  gymList: Gym[] = [];
  gymId: number = 0;

  gym: Gym = {
    id: 0,
    name: '',
    category: '',
    addressStreet: '',
    addressCity: '',
    addressState: '',
    addressZip: 0,
    hours: '',
    phone: '',
    details: '',
    image: '',
    owner: '',
    equipmentList: [],
    amenityList: [],
  }

  constructor(private router: Router, private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getAllGyms().subscribe((gyms: any) => {
      this.gymList = gyms
      console.log(gyms);
    });

    if (this.hasJWT() == true) {
      let loggedInOwner = this.ownerList.find(owner => owner.email === LoginComponent.loginRequest.email)
      if (loggedInOwner) {
        this.ownerId = loggedInOwner.id;
        this.router.navigate(['/owners', this.ownerId]);  
      }
    }
    
  }

  hasJWT(): boolean {
    let jwt = localStorage.getItem('jwt');
    return jwt !== null && jwt !== undefined && jwt !== '';
  }

  onSubmit() {
    this.apiService.createGym(this.gym).subscribe((response: any) => {
      console.log(response);
      console.log(this.gym);

      let createdGym = this.gymList.find(gym => gym.name === this.gym.name);
      if (createdGym) {
        this.gymId = createdGym.id;
        this.router.navigate(['/gyms', this.gymId]);
      }
    });
  }  
}
