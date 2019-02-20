import { Component, OnInit } from '@angular/core';
import { Weather, CityCoordinates } from '../model';
import { WeatherService } from '../weather.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
 
  cities: string[] = ['singapore', 'tokyo', 'hong kong', 'kuala lumpur'];

  constructor(private weatherSvc: WeatherService, private router: Router) { }

  ngOnInit() {
  }

  getWeather(city: string) {
    console.log('selected: ', city);
    this.router.navigate(['/weather', city]);
  }

  processForm(form: NgForm) {
    console.info(form.value);
    this.cities.push(form.value.city);
    form.resetForm();
  }

}