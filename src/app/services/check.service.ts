import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class CheckService {

	billLogs = environment.billLogs;

	constructor() { }

	checkBill(serialNo: string) {

		let isMatching = false;

		for (let bill of this.billLogs) {
			if (bill.serialNo === serialNo) {
				isMatching = true;
				break;
			}
		}
		
		return isMatching;
	}
}
