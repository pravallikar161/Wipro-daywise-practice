import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-failure',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './failure.html',
  styleUrl: './failure.css'
})
export class Failure {
  constructor(private router: Router) {}

  retry() {
    this.router.navigate(['/']);
  }

}
