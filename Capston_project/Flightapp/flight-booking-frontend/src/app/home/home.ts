import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.html'
})
export class HomeComponent {
  source = 'HYD';
  dest   = 'BLR';
  date   = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  constructor(private router: Router) {}

  search(evt?: Event) {
    evt?.preventDefault(); // avoid native form reload
    this.router.navigate(
      ['/search'],
      { queryParams: { source: this.source, dest: this.dest, date: this.date } }
    ).then(() => console.log('Navigated to /search'))
     .catch(err => console.error('Navigation error', err));
  }
}
