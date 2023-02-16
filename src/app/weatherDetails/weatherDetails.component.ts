import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails {
  @Input() weatherData: data[];

  searchString: string | undefined;

  get found() {
    return !!this.city;
  }

  get city(): data | undefined {
    return this.weatherData.find(city => city.name == this.searchString);
  }

}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}