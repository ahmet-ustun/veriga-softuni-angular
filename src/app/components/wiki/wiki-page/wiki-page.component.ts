import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-wiki-page',
	templateUrl: './wiki-page.component.html',
	styleUrls: ['./wiki-page.component.css']
})
export class WikiPageComponent implements OnInit {

	collection: any = [];

	constructor(
		private dataService: DataService
	) { }

	ngOnInit(): void {
		this.collection = this.dataService.billData;
		console.log(this.collection)
	}
}