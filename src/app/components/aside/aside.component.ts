import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-aside',
	templateUrl: './aside.component.html',
	styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

	darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

	onToggle(): void {
		this.darkModeService.toggle();
	}

	constructor(
		private darkModeService: DarkModeService
	) { }

	ngOnInit(): void {

	}
}
