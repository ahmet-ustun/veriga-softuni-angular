import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	user$ = this.auth.user;

	constructor(
		public auth: AngularFireAuth
	) {}

	ngOnInit(): void {

	}
}
