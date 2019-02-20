import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { Weather, CityCoordinates } from '../model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cityName: string;
  weather: Weather[] = [];
  coordinates: CityCoordinates = { latitude: 0, longitude: 0 };

  constructor(private weatherSvc: WeatherService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cityName = this.activatedRoute.snapshot.params.city;
    this.getWeather(this.cityName);

  }

back(){
  this.router.navigate(['/'])
}

  getWeather(city: string){
    
    this.weatherSvc.getWeather(city)
    .then(result => {
      console.info(result)
  
      //weather and coord is from the web
      const w = result['weather'];
      const c = result['coord'];;
      
      this.weather = [];
      for (let i in w)
      this.weather.push({
        description: `${w[i].main} - ${w[i].description}`,
        icon: w[i].icon
      })
      
      //c.lat and c.lon is from the web
      this.coordinates = {latitude: c.lat, longitude: c.lon}

      console.info(">> weather", this.weather);
      console.info(">> coordinates", this.coordinates);
      
    })
    .catch(error => {
      console.error('Error: ',error);
    })
  }
}
