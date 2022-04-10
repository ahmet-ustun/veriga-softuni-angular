import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { WikiPageComponent } from '../components/wiki/wiki-page/wiki-page.component';
import { WikiViewComponent } from '../components/wiki/wiki-view/wiki-view.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { AboutComponent } from '../components/about/about.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'wiki',
		component: WikiPageComponent,
		children: [
			{
				path: ':id',
				component: WikiViewComponent
			}
		]
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: '**',
		component: NotFoundComponent
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }