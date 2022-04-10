import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	billData: any = [
		{
			code: 'bgn',
			amount: 1,
			imageA: '../../../../assets/bills/bgn-1-a.png',
			imageB: '../../../../assets/bills/bgn-1-b.png',
			descrA: 'an image of the saint Sveti Ivan Rilski, the inscriptions “Св. Иван Рилски,” “876–946,” “1” and “ЕДИН ЛЕВ”',
			descrB: 'an image of the main church in the Rila Monastery and the inscriptions “1” and “ЕДИН ЛЕВ”'
		},
		{
			code: 'bgn',
			amount: 2,
			imageA: '../../../../assets/bills/bgn-2-a.png',
			imageB: '../../../../assets/bills/bgn-2-b.png',
			descrA: 'an image of Paisios of Chiliandar, inscriptions “Паисий Хилендарски,” “1722–1773,” “2” and “ДВА ЛЕВА”',
			descrB: 'the crowned lion rampant from Hristofor Zhefarovich’s Stemmatographia, the Bulgarian Arms from Konrad Grünenberg’s Armorial, a facsimile from the Zographou draft of the Historiae Sclavo-Bulgaricus, Tsar Kaloyan’s ring seal, three seals bearing images of Bulgarian Tsars, and the inscriptions “2” and “ДВА ЛЕВА”'
		},
		{
			code: 'bgn',
			amount: 5,
			imageA: '../../../../assets/bills/bgn-5-a.png',
			imageB: '../../../../assets/bills/bgn-5-b.png',
			descrA: 'an image of the painter Ivan Milev, inscriptions “Иван Милев,” “1897–1927” and “5 ЛЕВА”',
			descrB: 'fragments from the paintings A Harvest Maiden, The Bulgarian Madonna and The Dragon’s Wedding, and the inscriptions “5” and “ПЕТ ЛЕВА”'
		},
		{
			code: 'bgn',
			amount: 10,
			imageA: '../../../../assets/bills/bgn-10-a.png',
			imageB: '../../../../assets/bills/bgn-10-b.png',
			descrA: 'an image of Dr Petar Beron, inscriptions “Петър Берон,” “1799–1871,” “10,” and “ДЕСЕТ ЛЕВА”',
			descrB: 'facsimiles of Dr Petar Beron’s scientific journals, a telescope and the inscriptions “10” and “ДЕСЕТ ЛЕВА”'
		},
		{
			code: 'bgn',
			amount: 20,
			imageA: '../../../../assets/bills/bgn-20-a.png',
			imageB: '../../../../assets/bills/bgn-20-b.png',
			descrA: 'the image of Stefan Stambolov, inscriptions “Стефан Стамболов,” “1854–1895,” “20” and “ДВАДЕСЕТ ЛЕВА”',
			descrB: 'the National Assembly building, sculptuary from Sofia’s Orlov Most and Lavov Most bridges and the inscriptions “20” and “ДВАДЕСЕТ ЛЕВА”'
		},
		{
			code: 'bgn',
			amount: 50,
			imageA: '../../../../assets/bills/bgn-50-a.png',
			imageB: '../../../../assets/bills/bgn-50-b.png',
			descrA: 'an image of the poet Pencho Slaveykov, architectural motifs from the National Theatre and National Library buildings, inscriptions “Пенчо Славейков”, “1866–1912,” “50” and “ПЕТДЕСЕТ ЛЕВА”',
			descrB: 'facsimiles of works by Pencho Slaveykov, freehand sketches from anthologies of his works, a silhouette of the poet Mara Belcheva and the inscriptions “50” and “ПЕТДЕСЕТ ЛЕВА”'
		},
		{
			code: 'bgn',
			amount: 100,
			imageA: '../../../../assets/bills/bgn-100-a.png',
			imageB: '../../../../assets/bills/bgn-100-b.png',
			descrA: 'an image of the author Aleko Konstantinov, signs and symbols related to the Bulgarian Touring Movement, a facsimile of the frontispiece of Konstantinov’s travelogue Do Chikago i Nazad, inscriptions “Алеко Константинов,” “1863–1897,” “100” and “СТО ЛЕВА”',
			descrB: 'a figure of the author, items from his life and work and the inscriptions “100” and “СТО ЛЕВА”'
		}
	];

	constructor() { }
}
