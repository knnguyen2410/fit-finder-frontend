import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home/home.component';
import { AboutComponent } from './about/about.component';
import { GymsComponent } from './gyms/gyms.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GymComponent } from './gym/gym.component';
import { OwnerComponent } from './owner/owner.component';
import { OwnerGymsComponent } from './owner-gyms/owner-gyms.component';

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
        component: GymComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
