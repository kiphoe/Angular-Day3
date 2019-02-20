import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CityListComponent} from './components/city-list.component';
import {WeatherComponent} from './components/weather.component';

const ROUTES: Routes = [
  { path: "", component: CityListComponent },
  { path: "home", component: CityListComponent },
  { path: "weather/:city", component: WeatherComponent },
  { path: "**", redirectTo: "/", pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]

})
export class AppRouteModule { }