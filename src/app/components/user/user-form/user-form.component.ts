import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { AbcService } from 'src/app/services/abc.service';

@Component({
	selector: 'app-user-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

	billForm = this.formBuilder.group({
		ltr1: [
			null,
			[
				Validators.required
			]
		], ltr2: [
			null,
			[
				Validators.required
			]
		], srl: [
			null,
			[
				Validators.required, 
				Validators.min(1000000), 
				Validators.max(99999999)
			]
		], msg: [
			null,
			[
				Validators.required, 
				Validators.maxLength(250)
			]
		],
	});

	serial: string = '';
	story: string = '';
	collection: string[] = [];

	constructor(
		private abcService: AbcService,
		public auth: AngularFireAuth,
		public formBuilder: FormBuilder
	) { }

	ngOnInit(): void {
		this.collection = this.abcService.azbuka;
	}

	onSubmit() {
		let { ltr1, ltr2, srl } = this.billForm.value;
		this.serial = ltr1 + ltr2 + srl;
		this.story = this.billForm.value.msg;

		this.auth.user.subscribe(data => {
			// console.log(data?.email);
		});

		if (this.billForm.valid) {

		}
	}
}
