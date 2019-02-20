
import { WeatherComponent } from './components/weather.component';
import { CityListComponent } from './components/city-list.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { WeatherService } from './weather.service';
import { AppRouteModule } from './approute.module';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AppRouteModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
