import { Component } from '@angular/core';
import { CityCoordinates, Weather } from './model';
import { WeatherService } from './weather.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
}
