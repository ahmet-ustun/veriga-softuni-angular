import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsideComponent } from './components/aside/aside.component';
import { ClockComponent } from './components/clock/clock.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CelciusPipe } from './pipes/celcius.pipe';
import { HomeComponent } from './components/home/home.component';
import { LogoComponent } from './components/logo/logo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WikiPageComponent } from './components/wiki/wiki-page/wiki-page.component';
import { WikiViewComponent } from './components/wiki/wiki-view/wiki-view.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    ClockComponent,
    WeatherComponent,
    CelciusPipe,
    HomeComponent,
    LogoComponent,
    NotFoundComponent,
    WikiPageComponent,
    WikiViewComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }