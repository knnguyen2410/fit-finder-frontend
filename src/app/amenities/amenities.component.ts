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
    id: 0,
    category: '',
    subcategory: '',
    name: '',
    quantity: 0,
    details: '',
    image: '',
    gymId: 0
  }

  constructor(private route: ActivatedRoute, private apiService: ApiService){}

  /**
   * Initializes the component and retrieves the gym and amenity data from the API.
   */
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

  /**
   * Submits the form to create a new amenity for the current gym.
   */
  onSubmit(){
    if (this.hasJWT() == true) {
        this.apiService.createAmenityByGymId(this.currentGymId, this.createdAmenity).subscribe((response: any) => {
          location.reload();
          console.log(response);
        });
      }
    }

  /**
   * Deletes the specified amenity from the current gym.
   * @param currentAmenityId - The ID of the amenity to be deleted.
   */
    deleteAmenity(currentAmenityId: number) {
      if (this.hasJWT()) {
            this.apiService.deleteAmenityByGymId(this.currentGymId, currentAmenityId).subscribe((response: any) => {
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
