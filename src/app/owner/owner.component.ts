import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Owner } from '../models/owner.model';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  owner: Owner = {
    id: 0,
    name: '',
    email: '',
    password: '',
    image: ''
  };
  
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paramId: string = params.get('ownerId') || '';

      this.apiService.getOwnerById(parseInt(paramId)).subscribe((owner: any) => {
        this.owner = owner;
        console.log(owner);
      });
    });
  }
}
