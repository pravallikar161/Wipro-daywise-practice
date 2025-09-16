import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-success',
  standalone: true, 
  imports: [CommonModule,FormsModule],
  templateUrl: './success.html',
  styleUrl: './success.css'
})
export class Success {
  bookingId!: string;
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.bookingId = this.route.snapshot.params['bookingId'];
  }
  downloadPdf(){
    const bookingId = this.bookingId;
    const url = `http://localhost:8080/api/bookings/download?bookingId=${bookingId}`;

    this.http.get(url, { responseType: 'blob' }).subscribe({
      next: (blob: Blob) => {
        const fileURL = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
        window.open(fileURL);
      },
      error: (err) => {
        console.error('Download error:', err);
      }
    });
  }

}
