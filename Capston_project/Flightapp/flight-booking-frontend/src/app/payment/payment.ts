import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.html'
})
export class PaymentComponent implements OnInit {
  bookingId!: number;
  paying = false;

  card = { number: '', expiry: '', cvv: '' };

  constructor(private route: ActivatedRoute, private router: Router, private flightSvc: FlightService) {}

  ngOnInit(): void {
    this.bookingId = Number(this.route.snapshot.paramMap.get('bookingId'));
  }

  pay() {
    if (this.card.number.length !== 16) return;
    this.paying = true;
    this.flightSvc.pay(this.bookingId, this.card).subscribe(status => {
      this.paying = false;
      if (status === 'SUCCESS') this.router.navigate(['/success', this.bookingId]);
      else this.router.navigate(['/failure']);
    });
  }
}
