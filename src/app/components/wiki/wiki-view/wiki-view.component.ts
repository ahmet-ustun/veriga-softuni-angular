import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-wiki-view',
	templateUrl: './wiki-view.component.html',
	styleUrls: ['./wiki-view.component.css']
})
export class WikiViewComponent implements OnInit {

	paramId: any = '';
	isFound: boolean = false;
	billObj: any = {};

	billCodes: string[] = [
		'bgn-1', 'bgn-2', 'bgn-5',
		'bgn-10', 'bgn-20', 'bgn-50',
		'bgn-100'
	];

	constructor(
		private route: ActivatedRoute,
		private dataService: DataService
	) { }

	ngOnInit(): void {
		this.route.params.subscribe(
			data => {
				this.paramId = data['id'];

				if (this.billCodes.includes(this.paramId)) {
					this.isFound = true;

					const flag = this.paramId
						.split('-');

					this.billObj = this.dataService.billData
						.find((bill: any) => {
							return bill.amount == flag[1];
						});

				} else {
					this.isFound = false;
				}
			}
		)
	}
}
