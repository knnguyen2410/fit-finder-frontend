import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {
  gym: any;
  currentGymId: number = 0;
  currentGymOwner: any;
  currentGym: any;
  loggedInOwner: any;
  ownerList: Owner[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  /**
   * Initializes the component and retrieves the gym and owner data from the API.
   */
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paramId: string = params.get('gymId') || '';
      this.currentGymId = parseInt(paramId);

      this.apiService.getGymById(parseInt(paramId)).subscribe((gym: any) => {
        this.gym = gym;
        console.log(gym);
      });

      this.apiService.getAllOwners().subscribe((owners: any) => {
        this.ownerList = owners;
        console.log(owners);
      });
    });
  }
  
  /**
   * Submits the form to delete the current gym.
   */
  onSubmit() {
    if (this.hasJWT()) {
          this.apiService.deleteGymById(this.currentGymId).subscribe((deleteResponse: any) => {
            location.reload();
            console.log(deleteResponse);
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