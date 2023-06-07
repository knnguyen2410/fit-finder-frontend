import { Component, OnInit } from '@angular/core';
import { Gym } from '../models/gym.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.component.html',
  styleUrls: ['./gyms.component.css']
})
export class GymsComponent implements OnInit {
  gymList: Gym[] = [];

  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getAllGyms().subscribe((gyms: any) => {
      this.gymList = gyms
      console.log(gyms);
    });
  }
}
