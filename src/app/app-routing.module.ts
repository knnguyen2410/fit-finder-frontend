import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GymsComponent } from './gyms/gyms.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GymComponent } from './gym/gym.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerGymsComponent } from './owner-gyms/owner-gyms.component';
import { EquipmentAllComponent } from './equipment-all/equipment-all.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { SearchResultComponent } from './home-page/search-result/search-result.component';
import { HomeComponent } from './home-page/home/home.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { HomePageModule } from './home-page/home-page.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'gyms',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: GymsComponent,
      },
      {
        path: ':gymId',
        component: GymComponent,
        children: [
          {
            path: 'equipment',
            component: EquipmentAllComponent
          },
          {
            path: 'amenities',
            component: AmenitiesComponent
          }
        ]
      }
    ]
  },
  {
    path: 'owners',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path:':ownerId', 
        component: OwnerComponent,
        children: [
          {
            path: 'gyms',
            component: OwnerGymsComponent
          }
        ]
      }
    ]
  },
  {
    path: 'search',
    component: SearchResultComponent
  },
  {
    path: '**',
    component: WildcardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
