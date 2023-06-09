import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturedGymsComponent } from './featured-gyms/featured-gyms.component';
import { BannerComponent } from './banner/banner.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchBarComponent,
    HeroComponent,
    FeaturedGymsComponent,
    BannerComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    SearchBarComponent,
    SearchResultComponent
  ]
})
export class HomePageModule { }
