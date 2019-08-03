import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home.component';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';

import { Routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
