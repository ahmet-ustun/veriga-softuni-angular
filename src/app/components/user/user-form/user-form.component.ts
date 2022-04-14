import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbcService } from 'src/app/services/abc.service';

@Component({
	selector: 'app-user-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

	billForm = new FormGroup({
		letter1: new FormControl(''),
		letter2: new FormControl(''),
		serial: new FormControl(''),
		message: new FormControl(''),
	});

	serialNo: string = '';
	message: string='';
	collection: string[] = [];

	constructor(
		private abcService: AbcService
	) { }

	ngOnInit(): void {
		this.collection = this.abcService.azbuka;
	}

	onSubmit() {
		let {letter1, letter2, serial} = this.billForm.value;
		this.serialNo = letter1 + letter2 + serial;
		this.message = this.billForm.value.message;

		console.log(this.billForm.value);
	}
}
