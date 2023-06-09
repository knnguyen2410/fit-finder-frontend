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
  currentEequipment: any;
  gymList: Gym[] = [];
  currentGymId: number = 0;

  createdEquipment: Equipment = {
    id: 0,
    category: '',
    brand: '',
    name: '',
    quantity: 0,
    details: '',
    image: '',
    gymId: 0
  }

  constructor(private route: ActivatedRoute, private apiService: ApiService){}

  /**
   * Initializes the component and retrieves the gym and equipment data from the API.
   */
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

  /**
   * Submits the form to create new equipment for the current gym.
   */
  onSubmit(){
    if (this.hasJWT() == true) {
        this.apiService.createEquipmentByGymId(this.currentGymId, this.createdEquipment).subscribe((response: any) => {
          location.reload();
          console.log(response);
        }); 
    }
  }

  /**
   * Deletes the specified equipment from the current gym.
   * @param currentEquipmentId - The ID of the equipment to be deleted.
   */
  deleteEquipment(currentEquipmentId: number) {
    if (this.hasJWT()) {
          this.apiService.deleteEquipmentByGymId(this.currentGymId, currentEquipmentId).subscribe((response: any) => {
            location.reload();
            console.log(response);
      });
    }
  }  

  /**
   * Checks if a JSON Web Token (JWT) is present in local storage.
   * @returns True if a JWT is present, false otherwise.
   */
  hasJWT(): boolean {
    let jwt = localStorage.getItem('jwt');
    return jwt !== null && jwt !== undefined && jwt !== '';
  }
}