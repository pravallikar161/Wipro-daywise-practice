import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Flight {
  id: number;
  flightNumber?: string;
  aircraftName?: string;
  source: string;
  destination?: string; // backend may use 'destination'
  dest?: string;        // mock uses 'dest'
  travelDate?: string;
  date?: string;        // mock date
  price: number;
  airline?: string;
}

export interface Booking {
  id?: number;          // backend may send 'id'
  bookingId?: number;   // mock uses 'bookingId'
  flightId: number;
  userId?: string;
  name?: string;
  email?: string;
  amount: number;
  status: 'initiated' | 'PENDING' | 'successful' | 'failed' | 'FAILURE' | 'SUCCESS';
}

@Injectable({ providedIn: 'root' })
export class FlightService {
  private base = `${environment.apiUrl}/bookings`;
  constructor(private http: HttpClient) {}

  searchFlights(source: string, dest: string, date: string): Observable<Flight[]> {
    if (environment.useMocks) {
      const src = (source || '').toUpperCase().trim();
      const dst = (dest   || '').toUpperCase().trim();
      const all: Flight[] = [
        { id: 1, source: 'HYD', dest: 'BLR', date, price: 2500, airline: 'IndiGo' },
        { id: 2, source: 'HYD', dest: 'BLR', date, price: 3200, airline: 'Air India' },
        { id: 3, source: 'HYD', dest: 'BLR', date, price: 2900, airline: 'Vistara' },
      ];
      return timer(250).pipe(map(() => all.filter(f => f.source === src && (f.dest ?? f.destination) === dst)));
    }
    return this.http.post<Flight[]>(`${this.base}/search`, { source, dest, date });
  }

  /** Preferred name in latest code */
  initiateBooking(flightId: number, name: string, email: string): Observable<Booking> {
    if (environment.useMocks) {
      const booking: Booking = {
        bookingId: Math.floor(Math.random() * 1_000_000),
        flightId, name, email, amount: 2999, status: 'PENDING'
      };
      return timer(250).pipe(map(() => booking));
    }
    return this.http.post<Booking>(`${this.base}/book/${flightId}`, { name, email });
  }

  /** Back-compat alias (so older components calling bookFlight still compile) */
  bookFlight(flightId: number, name: string, email: string): Observable<Booking> {
    return this.initiateBooking(flightId, name, email);
  }

  pay(bookingId: number, card: { number: string; expiry: string; cvv: string }): Observable<'SUCCESS'|'FAILURE'> {
    if (environment.useMocks) {
      const ok = card.number?.length === 16 && card.cvv?.length === 3;
      return timer(600).pipe(map(() => (ok ? 'SUCCESS' as const : 'FAILURE' as const)));
    }
    return this.http.post<'SUCCESS'|'FAILURE'>(`${this.base}/pay`, { bookingId, card });
  }

  // For Kafka async real flow, you can later add:
  // getStatus(bookingId: number) {
  //   return this.http.get<{ status: string }>(`${this.base}/${bookingId}/status`);
  // }
}
