import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Gym } from 'src/app/models/gym.model';
import { Equipment } from 'src/app/models/equipment.model';
import { Amenity } from 'src/app/models/amenity.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {  
  allGymList: Gym[] = [];
  filteredGymList: Gym[] = [];

  allEquipmentList: Equipment[] = [];
  filteredEquipmentList: Equipment[] = [];
  
  allAmenityList: Amenity[] = [];
  filteredAmenityList: Amenity[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService){}

  ngOnInit() {
    this.filteredGymList = [];
    this.filteredEquipmentList = [];
    this.filteredAmenityList = [];

    this.apiService.getAllGyms().subscribe((gyms: any) => {
      this.allGymList = gyms;
      console.log(this.allGymList);
    });

    this.apiService.getAllEquipment().subscribe((allEquipment: any) => {
      this.allEquipmentList = allEquipment;
      console.log(this.allEquipmentList);
    });

    this.apiService.getAllAmenities().subscribe((allAmenities: any) => {
      this.allAmenityList = allAmenities;
      console.log(this.allAmenityList);
    });

    this.route.queryParams.subscribe(params => {
      const searchBy = params['searchBy'];
      setTimeout(() => {
        this.searchFunction(searchBy);
        console.log("ngOnInit searches for: " + searchBy);
      }, 100);
    });
  }

  searchFunction(searchInput: string): void {
    console.log("findGyms method filtering by: " + searchInput);
    
      this.filteredGymList = this.allGymList.filter(gym =>
        gym.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        gym.category.toLowerCase().includes(searchInput.toLowerCase()) ||
        gym.addressCity.toLowerCase().includes(searchInput.toLowerCase()) ||
        gym.details.toLowerCase().includes(searchInput.toLowerCase())
      );
      console.log(this.filteredGymList);

      this.filteredEquipmentList = this.allEquipmentList.filter(equipment => 
        equipment.category.toLowerCase().includes(searchInput.toLowerCase()) ||
        equipment.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
        equipment.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        equipment.details.toLowerCase().includes(searchInput.toLowerCase())
      );
      console.log(this.filteredEquipmentList);
    
      this.filteredAmenityList = this.allAmenityList.filter(amenity => 
        amenity.category.toLowerCase().includes(searchInput.toLowerCase()) ||
        amenity.subcategory.toLowerCase().includes(searchInput.toLowerCase()) ||
        amenity.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        amenity.details.toLowerCase().includes(searchInput.toLowerCase())
      );
      console.log(this.filteredAmenityList);
  }
}
