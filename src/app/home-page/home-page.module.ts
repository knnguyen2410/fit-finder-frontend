import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { FeaturedGymsComponent } from './featured-gyms/featured-gyms.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    FeaturedGymsComponent,
    BannerComponent,
    SearchBarComponent,
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
