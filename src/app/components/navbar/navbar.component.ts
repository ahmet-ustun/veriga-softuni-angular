import { Component, OnInit } from '@angular/core';
import Firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

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

	logout() {
		this.auth.signOut();
	}
}