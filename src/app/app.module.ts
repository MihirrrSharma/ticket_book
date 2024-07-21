import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SeatReservationComponent } from './seat-reservation/seat-reservation.component';  

@NgModule({
  declarations: [
    AppComponent,
    SeatReservationComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
