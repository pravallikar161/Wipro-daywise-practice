import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './success.html'
})
export class SuccessComponent implements OnInit {
  bookingId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.bookingId = Number(this.route.snapshot.paramMap.get('bookingId'));
  }

  download() {
    const doc = new jsPDF();
    doc.text(`Ticket - Booking #${this.bookingId}`, 10, 10);
    doc.text(`Thank you for flying with us!`, 10, 20);
    doc.save('ticket.pdf');
  }
}
