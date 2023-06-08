import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Amenity } from '../models/amenity.model';
import { ApiService } from '../services/api.service';
import { Gym } from '../models/gym.model';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {
  gym: any;
  amenityList: Amenity[] = [];
  gymList: Gym[] = [];
  currentGymId: number = 0;

  createdAmenity: Amenity = {
    category: '',
    subcategory: '',
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
  
      this.apiService.getAllAmenitiesByGymId(parseInt(paramId)).subscribe((gymAmenities: any) => {
        this.amenityList = gymAmenities;
        console.log(gymAmenities);
      });

      this.apiService.getAllGyms().subscribe((gyms: any) => {
        this.gymList = gyms
        console.log(gyms);
      });
    });
  }

  onSubmit(){
    if (this.hasJWT() == true) {
        this.apiService.createAmenityByGymId(this.currentGymId, this.createdAmenity).subscribe((response: any) => {
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
