import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipment } from '../models/equipment.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-equipment-all',
  templateUrl: './equipment-all.component.html',
  styleUrls: ['./equipment-all.component.css']
})
export class EquipmentAllComponent implements OnInit {
  gym: any;
  equipmentList: Equipment[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService){}

  ngOnInit() {
    this.route.parent?.paramMap.subscribe(params => {
      const paramId: string = params.get('gymId') || '';
  
      this.apiService.getGymById(parseInt(paramId)).subscribe((gym: any) => {
        this.gym = gym;
        console.log(gym);
      });
  
      this.apiService.getAllEquipmentByGymId(parseInt(paramId)).subscribe((gymEquipment: any) => {
        this.equipmentList = gymEquipment;
        console.log(gymEquipment);
      });
    });
  }
}
