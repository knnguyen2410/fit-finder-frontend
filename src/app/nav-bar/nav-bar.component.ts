import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  /**
   * Checks if a JSON Web Token (JWT) is present in the local storage.
   * @returns A boolean indicating whether a JWT is present.
   */
  hasJWT(): boolean {
    let jwt = localStorage.getItem('jwt');
    return jwt !== null && jwt !== undefined && jwt !== '';
  }

  /**
   * Clears the JSON Web Token (JWT) and associated email from the local storage.
   */
  clearJWT() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('email');
  }
}