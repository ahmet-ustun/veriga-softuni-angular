import { Injectable } from '@angular/core';
import Firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		public auth: AngularFireAuth
	) { }

	googleLogin() {
		const provider = new Firebase.auth
			.GoogleAuthProvider();

		provider.setCustomParameters({
			prompt: "select_account"
		});

		this.auth.signInWithPopup(provider);
	}

	googleLogout() {
		this.auth.signOut();
	}
}
