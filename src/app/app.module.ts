import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageModule } from './home-page/home-page.module';
import { AboutComponent } from './about/about.component';
import { GymsComponent } from './gyms/gyms.component';
import { OwnersComponent } from './owners/owners.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { GymComponent } from './gym/gym.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerGymsComponent } from './owner-gyms/owner-gyms.component';
import { EquipmentAllComponent } from './equipment-all/equipment-all.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AboutComponent,
    GymsComponent,
    OwnersComponent,
    LoginComponent,
    RegisterComponent,
    GymComponent,
    OwnerComponent,
    OwnerGymsComponent,
    EquipmentAllComponent,
    AmenitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomePageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
