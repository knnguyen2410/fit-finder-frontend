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

  /**
   * Performs a search based on the provided search input.
   * Navigates to the search results page with the search input as a query parameter.
   * @param searchInput - The search input string.
   */
  searchFunction(searchInput: string): void {
    this.router.navigate(['/search'], {
      queryParams: { searchBy: searchInput }
    })    
    console.log("Search Bar Input: " + searchInput);

  }
}
