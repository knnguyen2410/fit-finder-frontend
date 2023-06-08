import { Component } from '@angular/core';
import { Gym } from '../models/gym.model';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent {
  gymList: Gym[] = [];
  
  ownerList: Owner[] = [];
  loggedInOwner: any;

  createdGym: Gym = {
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
    // owner: {
    //   id: 0,
    //   name: '',
    //   email: '',
    //   password: '',
    //   image: ''
    // },
    // equipmentList: [],
    // amenityList: [],
  }

  constructor(private router: Router, private apiService: ApiService){}

  onSubmit(){
    this.apiService.getAllGyms().subscribe((gyms: any) => {
      this.gymList = gyms
      console.log(gyms);
    });

    this.apiService.getAllOwners().subscribe((owners: any) => {
      this.ownerList = owners;
      console.log(owners);
    });

    if (this.hasJWT() == true) {
      let loggedInOwner = this.ownerList.find(owner => owner.email === localStorage.getItem('email'))
      if (loggedInOwner) {
        this.loggedInOwner = loggedInOwner;
        console.log(this.loggedInOwner);

        this.apiService.createGym(this.createdGym).subscribe((response: any) => {
          console.log(response);
        });
      }
    }
  }

  hasJWT(): boolean {
    let jwt = localStorage.getItem('jwt');
    return jwt !== null && jwt !== undefined && jwt !== '';
  }
}
