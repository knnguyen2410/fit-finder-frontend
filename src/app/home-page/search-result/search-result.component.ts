import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gym } from 'src/app/models/gym.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  gymList: Gym[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService){}

  ngOnInit() {
    this.apiService.getAllGyms().subscribe((gyms: any) => {
      this.gymList = gyms;
      console.log(gyms);

      this.route.queryParams.subscribe(params => {
        const searchTerm = params['searchTerm'];
        this.findGymByName(searchTerm);
      });
    });
  }

  findGymByName(searchTerm: string): void {
    this.gymList = this.gymList.filter(gym => gym.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
