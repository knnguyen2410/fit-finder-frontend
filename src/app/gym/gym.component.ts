import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Owner } from '../models/owner.model';
import { Gym } from '../models/gym.model';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {
  gym: any;
  currentGymId: number = 0;
  currentGymOwner: any;
  currentGym: any;
  loggedInOwner: any;
  ownerList: Owner[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paramId: string = params.get('gymId') || '';
      this.currentGymId = parseInt(paramId);

      this.apiService.getGymById(parseInt(paramId)).subscribe((gym: any) => {
        this.gym = gym;
        console.log(gym);
      });

      this.apiService.getAllOwners().subscribe((owners: any) => {
        this.ownerList = owners;
        console.log(owners);
      });
    });
  }
  
  onSubmit() {
    if (this.hasJWT()) {
          this.apiService.deleteGymById(this.currentGymId).subscribe((deleteResponse: any) => {
            location.reload();
            console.log(deleteResponse);
      });
    }
  }  

  hasJWT(): boolean {
    let jwt = localStorage.getItem('jwt');
    return jwt !== null && jwt !== undefined && jwt !== '';
  }
}