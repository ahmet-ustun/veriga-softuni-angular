import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { CelciusPipe } from './pipes/celcius.pipe';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogoComponent } from './components/logo/logo.component';
import { AsideComponent } from './components/aside/aside.component';
import { ClockComponent } from './components/clock/clock.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WikiPageComponent } from './components/wiki/wiki-page/wiki-page.component';
import { WikiViewComponent } from './components/wiki/wiki-view/wiki-view.component';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user-page/user.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { UserLogsComponent } from './components/user/user-logs/user-logs.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		LogoComponent,
		AsideComponent,
		ClockComponent,
		WeatherComponent,
		CelciusPipe,
		HomeComponent,
		WikiPageComponent,
		WikiViewComponent,
		AboutComponent,
		UserComponent,
		NotFoundComponent,
		UserFormComponent,
		UserLogsComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		HttpClientJsonpModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFirestoreModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})

export class AppModule { }