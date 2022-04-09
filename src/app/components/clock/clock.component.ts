import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-clock',
	templateUrl: './clock.component.html',
	styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

	time: Date = new Date();
	timerId: any = null;

	setNewTime(): void {
		this.time = new Date();
	}

	updateTime(): void {
		setInterval(() => {
			this.setNewTime();
		}, 1000);
	}

	constructor() { }

	ngOnInit(): void {
		this.setNewTime();
    	this.timerId = this.updateTime();
	}

	ngOnDestroy(): void {
		clearInterval(this.timerId);
	}
}
