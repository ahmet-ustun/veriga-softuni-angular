import { Component, OnInit } from '@angular/core';
import { FireService } from 'src/app/services/fire.service';

@Component({
	selector: 'app-user-logs',
	templateUrl: './user-logs.component.html',
	styleUrls: ['./user-logs.component.css']
})
export class UserLogsComponent implements OnInit {

	bill01: any;
	bill02: any;
	bill03: any;
	bill04: any;
	bill05: any;
	bill06: any;
	bill07: any;
	bill08: any;
	bill09: any;
	bill10: any;

	billList: any;

	constructor(
		private fireService: FireService
	) { }

	ngOnInit(): void {
		this.fireService.getBillLogAll().subscribe(data => {
			this.bill01 = data[0].payload.doc.data();
			this.bill02 = data[1].payload.doc.data();
			this.bill03 = data[2].payload.doc.data();
			this.bill04 = data[3].payload.doc.data();
			this.bill05 = data[4].payload.doc.data();
			this.bill06 = data[5].payload.doc.data();
			this.bill07 = data[6].payload.doc.data();
			this.bill08 = data[7].payload.doc.data();
			this.bill09 = data[8].payload.doc.data();
			this.bill10 = data[9].payload.doc.data();
		});
	}
}
