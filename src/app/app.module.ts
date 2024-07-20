import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add FormsModule for ngModel
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';  // Import the component

@NgModule({
  declarations: [
    AppComponent,
    SeatReservationComponent  // Declare the component
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports
    HttpClientModule // Add HttpClientModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
