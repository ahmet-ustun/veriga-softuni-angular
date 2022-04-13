import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

	apiKey: string = environment.weather.apiKey;
	weather: any = {};

	isLoading: boolean = true;
	isBroken: boolean = false;

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
			.subscribe({
				next: data => {
					this.weather = data;

					this.icon = this.weather.current.condition.icon;
					this.text = this.weather.current.condition.text;
					this.temp = Math.round(this.weather.current.temp_c);

					this.isLoading = false;
					this.isBroken = false;
				},
				error: error => {
					console.log(error.message);
					this.isLoading = false;
					this.isBroken = true;
				}
			});
	}

	constructor(
		private http: HttpClient
	) { }

	ngOnInit(): void {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				position => {
					this.getWeather(position.coords);
				},
				error => {
					console.log(error.message);
					this.isLoading = false;
					this.isBroken = true;
				}
			);
		} else {
			console.log('No geolocation!');
			this.isLoading = false;
			this.isBroken = true;
		}
	}
}