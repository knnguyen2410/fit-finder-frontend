import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchInput: string = '';

  constructor(private router: Router) {}

  searchFunction(searchInput: string): void {
    this.router.navigate(['/search'], {
      queryParams: { searchBy: searchInput }
    })    
    console.log("Search Bar Input: " + searchInput);

  }
}
