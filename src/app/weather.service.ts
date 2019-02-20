import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const APPID = 'ee4a3830e5e00349ef4d62590f266e95';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    console.info('>> city: ', city);

    //?q=<city>&appid=abc123
    const qs = new HttpParams()
                  .set('q', city)
                  .set('appid', APPID);

    return (
      // http://something?q=<city>&appid=abc123
      this.http.get(URL, { params: qs })
        .toPromise() //Convert the result to a promise
        .then(result => {
          return ({
            weather: result['weather'],
            coord: result['coord']
            })
        })
    )
  }

}