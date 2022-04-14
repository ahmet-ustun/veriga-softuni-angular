import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AbcService {

	azbuka: string[] = [
		'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й',
		'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У',
		'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ь', 'Ю', 'Я'
	];

	constructor() { }
}