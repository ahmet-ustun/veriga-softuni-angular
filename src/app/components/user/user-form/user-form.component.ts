import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { AbcService } from 'src/app/services/abc.service';
import { CheckService } from 'src/app/services/check.service';
import { FireService } from 'src/app/services/fire.service';

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

	billLogs: any = [];
	user: any = {};

	constructor(
		private abcService: AbcService,
		public auth: AngularFireAuth,
		public formBuilder: FormBuilder,
		private billChecker: CheckService,
		private fireService: FireService,
	) {}

	update(serialNo: any, userLog: any) {
		this.fireService.updatePolicy(serialNo, userLog);
	}

	ngOnInit(): void {
		this.collection = this.abcService.azbuka;
		let u: any = localStorage.getItem('user');
		this.user = JSON.parse(u);
	}

	onSubmit() {
		let { ltr1, ltr2, srl } = this.billForm.value;
		this.serial = ltr1 + ltr2 + srl;
		let displayName: any = this.user.displayName;
		this.story = this.billForm.value.msg;

		let newData = {
			[displayName]: this.story
		};

		if (this.billForm.valid) {

			if (this.billChecker.checkBill(this.serial)) {
				this.update(this.serial, newData);
				this.billForm.reset();

			} else {
				alert("This bill doesn't exist in Veriga!");
				this.billForm.reset();
			}
		}
	}
}
