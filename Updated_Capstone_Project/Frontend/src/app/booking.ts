import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchDTO } from './models/search.dto';
import { FlightDTO } from './models/flight.dto';
import { BookingRequest } from './models/booking-request.dto';

@Injectable({
  providedIn: 'root'
})
export class Booking {
  private baseUrl = 'http://localhost:8080/api/bookings';
  private flightUrl = 'http://localhost:8081/api/flights';

  constructor(private http: HttpClient) {}

  searchFlights(dto: SearchDTO): Observable<FlightDTO[]> {
    return this.http.post<FlightDTO[]>(`${this.baseUrl}/search`, dto);
  }

  bookFlight(req: BookingRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/book`, req);
  }
  getBookingStatus(bookingId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/status?bookingId=${bookingId}`);
  }
  getFlightById(flightId: string): Observable<FlightDTO> {
    return this.http.get<FlightDTO>(`${this.flightUrl}/${flightId}`);
  }
  
}
