import { Component, OnInit } from '@angular/core';
import { Gym } from 'src/app/models/gym.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-featured-gyms',
  templateUrl: './featured-gyms.component.html',
  styleUrls: ['./featured-gyms.component.css']
})
export class FeaturedGymsComponent implements OnInit {

  gymList: Gym[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getAllGyms().subscribe((gyms: any) => {
      this.gymList = gyms
      console.log(gyms);
    });
  }
}