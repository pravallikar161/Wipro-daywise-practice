import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingRequest } from '../models/booking-request.dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment {
  bookingId!: string;
  mode: string = 'CARD';
  cardNumber!: string;
  expiryDate!: string;
  cvv!: string;
  upiId!: string;

  constructor(
    private route: ActivatedRoute,
    private bookingService: Booking,
    private router: Router
  ) {
    this.bookingId = this.route.snapshot.params['bookingId'];
  }

  simulatePayment() {
    if (this.mode === 'CARD' && (!this.cardNumber || !this.expiryDate || !this.cvv)) {
      alert('Please fill in all card details');
      return;
    }
    if (this.mode === 'UPI' && !this.upiId) {
      alert('Please enter UPI ID');
      return;
    }

    setTimeout(() => {
      this.bookingService.getBookingStatus(this.bookingId).subscribe((res: any) => {
        if (res.status === 'Successful') {
          this.router.navigate(['/success', this.bookingId]);
        } else {
          this.router.navigate(['/failure']);
        }
      });
    }, 3000);
  }

}
 