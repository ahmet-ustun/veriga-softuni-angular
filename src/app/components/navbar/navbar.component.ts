import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

	constructor(
		public authService: AuthService,
		public auth: AngularFireAuth
	) { }

	ngOnInit(): void {
	}

	login() {
		this.authService.googleLogin();
	}

	logout() {
		this.authService.googleLogout();
	}
}