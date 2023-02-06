import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';

@NgModule({
  // declarations holds the components we can use in our app.
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  // imports holds the libraries/frameworks we can use in our app.
  imports: [BrowserModule, AppRoutingModule, RatingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
