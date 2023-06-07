import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gym } from '../models/gym.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-owner-gyms',
  templateUrl: './owner-gyms.component.html',
  styleUrls: ['./owner-gyms.component.css']
})
export class OwnerGymsComponent implements OnInit{

  ownerGymList: Gym[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService){}

  ngOnInit(){
    this.route.parent?.paramMap.subscribe(params => {
      const paramId: string = params.get('ownerId') || '';
      this.apiService.getAllGymsByOwnerId(parseInt(paramId)).subscribe((ownerGyms: any) => {
        this.ownerGymList = ownerGyms;
        console.log(ownerGyms.ownerId);
      });
    });
  }
}
