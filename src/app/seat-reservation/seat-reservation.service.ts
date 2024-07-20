import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatReservationService {

  private apiUrl = 'http://localhost:3000/api/seats';

  constructor(private http: HttpClient) { }

  getSeats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getSeats`);
  }

  bookSeats(numSeats: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/bookSeats`, { numSeats });
  }
}
