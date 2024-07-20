import { TestBed } from '@angular/core/testing';

import { SeatReservationService } from './seat-reservation.service';

describe('SeatReservationService', () => {
  let service: SeatReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeatReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
