import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { FeaturedGymsComponent } from './featured-gyms/featured-gyms.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    FeaturedGymsComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class HomePageModule { }
