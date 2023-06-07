import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gym } from '../models/gym.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent {
  gym: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paramId: string = params.get('gymId') || '';

      this.apiService.getGymById(parseInt(paramId)).subscribe((gym: any) => {
        this.gym = gym;
        console.log(gym);
      });
    });
  }
}