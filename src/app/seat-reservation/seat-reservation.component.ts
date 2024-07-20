import { Component, OnInit } from '@angular/core';
import { SeatReservationService } from './seat-reservation.service';

@Component({
  selector: 'app-seat-reservation',
  templateUrl: './seat-reservation.component.html',
  styleUrls: ['./seat-reservation.component.css']
})
export class SeatReservationComponent implements OnInit {
  seats: any[] = [];
  numSeats: number = 0;
  message: string = '';

  constructor(private seatReservationService: SeatReservationService) { }

  ngOnInit(): void {
    this.getSeats();
  }

  getSeats(): void {
    this.seatReservationService.getSeats().subscribe(
      data => {
        this.seats = data;
      },
      error => {
        console.error('Error fetching seats', error);
      }
    );
  }

  getRows() {
    const rows = [];
    let row = [];
    let rowCount = 0;

    for (const seat of this.seats) {
      if (rowCount < 7) {
        row.push(seat);
        rowCount++;
      } else {
        rows.push(row);
        row = [seat];
        rowCount = 1;
      }
    }

    if (row.length > 0) {
      rows.push(row);
    }

    return rows;
  }

  bookSeats(): void {
    if (this.numSeats && this.numSeats > 0 && this.numSeats <= 7) {
      this.seatReservationService.bookSeats(this.numSeats).subscribe(
        data => {
          this.message = data.message;
          this.getSeats();
        },
        error => {
          this.message = 'Error booking seats';
          console.error('Error booking seats', error);
        }
      );
    } else {
      this.message = 'Please enter a number between 1 and 7';
    }
  }
}
