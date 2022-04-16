import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
	providedIn: 'root'
})
export class FireService {

	constructor(
		private firestore: AngularFirestore
	) { }

	getBillLogAll() {
		return this.firestore.collection('bill-logs').snapshotChanges();
	}

	updatePolicy(serialNo: any, userLog: any) {
		this.firestore.doc('bill-logs/' + serialNo).set(userLog);
	}
}
