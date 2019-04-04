import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  location = { cityName: 'Cali', countryCode: 'co' };
  weather = undefined;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getWeather(cityName: string, countryCode: string){
    this.weatherService.getWeather(cityName, countryCode)
    .subscribe(
      res => {
        console.log(res);
        this.weather = res;
      },
      err => console.error(err)
    )
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement){
    if(cityName.value && countryCode.value){
      this.getWeather(cityName.value, countryCode.value);
      cityName.value = '';
      countryCode.value = '';
    }
    else{
      alert('Ingrese algun valor')
    }

    cityName.focus();
    return false
  }
}
