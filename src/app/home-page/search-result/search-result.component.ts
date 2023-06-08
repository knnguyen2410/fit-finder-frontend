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
  equipmentList: Equipment[] = [];
  amenityList: Amenity[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService){}

  ngOnInit() {
    this.filteredGymList = [];

    this.apiService.getAllGyms().subscribe((gyms: any) => {
      this.allGymList = gyms;
      console.log(this.allGymList);

      this.route.queryParams.subscribe(params => {
        const searchBy = params['searchBy'];
        this.findGyms(searchBy);
        console.log("ngOnInIt searches for: " + searchBy);
      });
    });
  }

  findGyms(searchInput: string): void {
      this.filteredGymList = this.allGymList.filter(gym =>
        gym.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        gym.category.toLowerCase().includes(searchInput.toLowerCase()) ||
        gym.addressCity.toLowerCase().includes(searchInput.toLowerCase()) ||
        gym.details.toLowerCase().includes(searchInput.toLowerCase()) ||
        gym.owner.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        this.searchEquipmentList(gym.equipmentList, searchInput) ||
        this.searchAmenityList(gym.amenityList, searchInput)
      );
      console.log("findGyms method filtering by: " + searchInput);
      console.log(this.filteredGymList);
  }
  
  searchEquipmentList(equipmentList: Equipment[], searchInput: string): boolean {
    return equipmentList.some(equipment =>
      equipment.category.toLowerCase().includes(searchInput.toLowerCase()) ||
      equipment.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
      equipment.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      equipment.details.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
  
  searchAmenityList(amenityList: Amenity[], searchInput: string): boolean {
    return amenityList.some(amenity =>
      amenity.category.toLowerCase().includes(searchInput.toLowerCase()) ||
      amenity.subcategory.toLowerCase().includes(searchInput.toLowerCase()) ||
      amenity.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      amenity.details.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
}
