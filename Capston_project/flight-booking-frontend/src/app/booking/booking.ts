import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.html'
})
export class BookingComponent implements OnInit {
  flightId!: number;
  name = '';
  email = '';

  constructor(private route: ActivatedRoute, private router: Router, private flightSvc: FlightService) {}

  ngOnInit(): void {
    this.flightId = Number(this.route.snapshot.paramMap.get('id'));
  }

  proceed() {
    this.flightSvc.bookFlight(this.flightId, this.name, this.email).subscribe(b => {
      this.router.navigate(['/payment', b.bookingId]);
    });
  }
}
