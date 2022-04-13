import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(
		public authService: AuthService,
		public auth: AngularFireAuth
	) { }

	ngOnInit(): void {

	}

	login() {
		this.authService.googleLogin();
	}
}
