import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavComponent } from './nav/nav.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CarruselComponent } from './carrusel/carrusel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavComponent, CabeceraComponent, CarruselComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
