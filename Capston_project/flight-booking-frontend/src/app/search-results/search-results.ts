import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-results.html'
})
export class SearchResultsComponent implements OnInit {
  flights: any[] = [];
  filtered: any[] = [];
  minPrice?: number;
  maxPrice?: number;
  loaded = false;

  qp: { source: string; dest: string; date: string } = { source: 'HYD', dest: 'BLR', date: new Date().toISOString().slice(0,10) };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flightSvc: FlightService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(q => {
      // fallbacks if query params missing
      this.qp = {
        source: q['source'] || this.qp.source,
        dest:   q['dest']   || this.qp.dest,
        date:   q['date']   || this.qp.date
      };

      this.flightSvc.searchFlights(this.qp.source, this.qp.dest, this.qp.date)
        .subscribe(list => {
          console.log('Flights from service:', list);
          this.flights = list;
          this.applyFilters();
          this.loaded = true;
        }, err => {
          console.error('Search error', err);
          this.loaded = true;
        });
    });
  }

  applyFilters() {
    this.filtered = this.flights.filter(f => {
      const okMin = this.minPrice == null || f.price >= this.minPrice;
      const okMax = this.maxPrice == null || f.price <= this.maxPrice;
      return okMin && okMax;
    });
  }

  clearFilters() {
    this.minPrice = this.maxPrice = undefined;
    this.applyFilters();
  }

  book(id: number) {
    this.router.navigate(['/book', id], { queryParams: this.qp });
  }
}
