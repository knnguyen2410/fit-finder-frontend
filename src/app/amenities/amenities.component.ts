import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Amenity } from '../models/amenity.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {
  gym: any;
  amenityList: Amenity[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService){}

    ngOnInit() {
    this.route.parent?.paramMap.subscribe(params => {
      const paramId: string = params.get('gymId') || '';
  
      this.apiService.getGymById(parseInt(paramId)).subscribe((gym: any) => {
        this.gym = gym;
        console.log(gym);
      });
  
      this.apiService.getAllAmenitiesByGymId(parseInt(paramId)).subscribe((gymAmenities: any) => {
        this.amenityList = gymAmenities;
        console.log(gymAmenities);
      });
    });
  }
}
