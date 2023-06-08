import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipment } from '../models/equipment.model';
import { ApiService } from '../services/api.service';
import { Gym } from '../models/gym.model';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-equipment-all',
  templateUrl: './equipment-all.component.html',
  styleUrls: ['./equipment-all.component.css']
})
export class EquipmentAllComponent implements OnInit {
  gym: any;
  equipmentList: Equipment[] = [];
  gymList: Gym[] = [];
  currentGymId: number = 0;

  createdEquipment: Equipment = {
    category: '',
    brand: '',
    name: '',
    quantity: 0,
    details: '',
    image: '',
    gymId: 0
  }

  constructor(private route: ActivatedRoute, private apiService: ApiService){}

  ngOnInit() {
    this.route.parent?.paramMap.subscribe(params => {
      const paramId: string = params.get('gymId') || '';
      this.currentGymId = parseInt(paramId);
  
      this.apiService.getGymById(parseInt(paramId)).subscribe((gym: any) => {
        this.gym = gym;
        console.log(gym);
      });
  
      this.apiService.getAllEquipmentByGymId(parseInt(paramId)).subscribe((gymEquipment: any) => {
        this.equipmentList = gymEquipment;
        console.log(gymEquipment);
      });

      this.apiService.getAllGyms().subscribe((gyms: any) => {
        this.gymList = gyms
        console.log(gyms);
      });
    });
  }

  onSubmit(){
    if (this.hasJWT() == true) {
        this.apiService.createEquipmentByGymId(this.currentGymId, this.createdEquipment).subscribe((response: any) => {
          location.reload();
          console.log(response);
        }); 
    }
  }

  hasJWT(): boolean {
    let jwt = localStorage.getItem('jwt');
    return jwt !== null && jwt !== undefined && jwt !== '';
  }
}