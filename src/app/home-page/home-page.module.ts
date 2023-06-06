import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
