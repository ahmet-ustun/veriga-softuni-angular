import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AsideComponent } from './components/aside/aside.component';
import { ClockComponent } from './components/clock/clock.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CelciusPipe } from './pipes/celcius.pipe';
import { HomeComponent } from './components/home/home.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    ClockComponent,
    WeatherComponent,
    CelciusPipe,
    HomeComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }