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
  gymList: Gym[] = [];
  equipmentList: Equipment[] = [];
  amenityList: Amenity[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService){}

  ngOnInit() {
    this.apiService.getAllGyms().subscribe((gyms: any) => {
      this.gymList = gyms;
      console.log(gyms);

      this.route.queryParams.subscribe(params => {
        const searchBy = params['searchBy'];
        this.findGyms(searchBy);
      });
    });
  }

  findGyms(searchTerm: string): void {
      this.gymList = this.gymList.filter(gym =>
        gym.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gym.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gym.addressStreet.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gym.addressCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gym.addressState.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gym.addressZip.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        gym.hours.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gym.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gym.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
        gym.owner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        this.searchEquipmentList(gym.equipmentList, searchTerm) ||
        this.searchAmenityList(gym.amenityList, searchTerm)
      );
  }
  
  searchEquipmentList(equipmentList: Equipment[], searchTerm: string): boolean {
    return equipmentList.some(equipment =>
      equipment.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      equipment.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      equipment.quantity.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      equipment.details.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  searchAmenityList(amenityList: Amenity[], searchTerm: string): boolean {
    return amenityList.some(amenity =>
      amenity.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      amenity.subcategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      amenity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      amenity.quantity.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      amenity.details.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
