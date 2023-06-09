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

  /**
   * Initializes the SearchResultComponent.
   * Retrieves all gyms, equipment, and amenities from the API service.
   * Subscribes to the query parameters to perform a search based on the provided search input.
   */
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

  /**
   * Performs the search based on the provided search input.
   * Updates the filteredGymList based on the search results.
   * @param searchInput - The search input string.
   */
  searchFunction(searchInput: string): void {
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

  /**
   * Searches the equipment list for a match with the provided search input.
   * @param equipmentList - The equipment list to search in.
   * @param searchInput - The search input string.
   * @returns A boolean indicating whether a match was found in the equipment list.
   */
  searchEquipmentList(equipmentList: Equipment[], searchInput: string): boolean {
    return equipmentList.some(equipment =>
      equipment.category.toLowerCase().includes(searchInput.toLowerCase()) ||
      equipment.brand.toLowerCase().includes(searchInput.toLowerCase()) ||
      equipment.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      equipment.details.toLowerCase().includes(searchInput.toLowerCase())
    );
  }

  /**
   * Searches the amenity list for a match with the provided search input.
   * @param amenityList - The amenity list to search in.
   * @param searchInput - The search input string.
   * @returns A boolean indicating whether a match was found in the amenity list.
   */
  searchAmenityList(amenityList: Amenity[], searchInput: string): boolean {
    return amenityList.some(amenity =>
      amenity.category.toLowerCase().includes(searchInput.toLowerCase()) ||
      amenity.subcategory.toLowerCase().includes(searchInput.toLowerCase()) ||
      amenity.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      amenity.details.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
}
