import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ownerList: Owner[] = [];

  owner: Owner = {
    name: '',
    email: '',
    password: '',
    image: ''
  }

  constructor(private router: Router, private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getAllOwners().subscribe((owners: any) => {
      this.ownerList = owners;
      console.log(owners);
    });
  }

  onSubmit() {
    this.apiService.register(this.owner).subscribe((response: any) => {
      console.log(response);
      console.log(this.owner);

      if (response.id !== null) {
        this.router.navigate(['']);
      }
    });
  }  
}
