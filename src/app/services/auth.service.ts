import { Injectable } from '@angular/core';
import Firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		public auth: AngularFireAuth,
		private router: Router
	) {
		this.auth.authState.subscribe(user => {
			if (user) {
				localStorage.setItem('user', JSON.stringify(user));
			} else {
				localStorage.removeItem('user');
			}
		});
	}

	googleLogin() {
		const provider = new Firebase.auth
			.GoogleAuthProvider();

		provider.setCustomParameters({
			prompt: "select_account"
		});

		this.auth.signInWithPopup(provider)
			.then(() => {
				this.router.navigate(['user']);

			}).catch(error => {
				alert(error.message);
				this.router.navigate(['home']);
			});
	}

	googleLogout() {
		this.auth.signOut()
			.then(() => {
				this.router.navigate(['home']);

			}).catch(error => {
				alert(error.message);
				this.router.navigate(['home']);
			});
	}
}
