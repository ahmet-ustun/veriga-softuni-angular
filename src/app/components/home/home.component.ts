import { Component, OnInit } from '@angular/core';
import Firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(
		public auth: AngularFireAuth
	) { }

	ngOnInit(): void {

	}

	login() {
		const provider = new Firebase.auth
			.GoogleAuthProvider();

		this.auth.signInWithPopup(provider);
	}
}
