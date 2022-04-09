import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

	apiKey: string = '4fbb3d5cbb55449485773624220904';
	weather: any = {};

	icon: string = '';
	text: string = '';
	temp: number = 0;

	getWeather(coordinates: any) {

		const lat = coordinates.latitude;
		const lon = coordinates.longitude;

		const url = `http://api.weatherapi.com/v1/current.json`;
		const apiKey = `?key=${this.apiKey}`;
		const latLon = `&q=${lat},${lon}&aqi=no`;

		this.http.get(url + apiKey + latLon)
			.subscribe(data => {
				this.weather = data;
				this.icon = this.weather.current.condition.icon;
				this.text = this.weather.current.condition.text;
				this.temp = Math.round(this.weather.current.temp_c);
			});
	}

	constructor(
		private http: HttpClient
	) { }

	ngOnInit(): void {
		navigator.geolocation
			.getCurrentPosition(position => {
				this.getWeather(position.coords);
			});
		}
}