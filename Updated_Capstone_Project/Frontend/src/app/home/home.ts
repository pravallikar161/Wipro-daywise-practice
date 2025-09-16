import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchDTO } from '../models/search.dto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  search: SearchDTO = { source: '', destination: '', date: '' };

  constructor(private router: Router) {}
  swap() {
    const temp = this.search.source;
    this.search.source = this.search.destination;
    this.search.destination = temp;
  }

  submitSearch() {
    if (this.search.source && this.search.destination && this.search.date) {
    this.router.navigate(['/results'], { state: this.search });
    }
  }

}
