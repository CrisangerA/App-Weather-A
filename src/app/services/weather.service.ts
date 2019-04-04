import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = '9f9f6038bdcc557d9daea58d21dcc828';
  URI1: string = '';
  URI2: string = '';

  constructor(private http: HttpClient) { 
    //this.URI1 = `https://api.openweathermap.org/data/2.5/?appid=${this.apiKey}&units=metric&q=`;
    this.URI1 = `https://api.openweathermap.org/data/2.5/find?q=`;
    this.URI2 = `&units=metric&appid=${this.apiKey}`
  }

  getWeather(cityName: string, countryCode: string){
    return this.http.get(`${this.URI1}${cityName},${countryCode}${this.URI2}`);
  }
}
