import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FeaturedGymsComponent } from './featured-gyms/featured-gyms.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    SearchBarComponent,
    FeaturedGymsComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomePageModule { }
