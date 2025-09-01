import { Routes } from '@angular/router';

// Use the .ts filenames you created (not .component.ts)
import { HomeComponent } from './home/home';
import { SearchResultsComponent } from './search-results/search-results';
import { BookingComponent } from './booking/booking';
import { PaymentComponent } from './payment/payment';
import { SuccessComponent } from './success/success';
import { FailureComponent } from './failure/failure';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchResultsComponent },
  { path: 'book/:id', component: BookingComponent },
  { path: 'payment/:bookingId', component: PaymentComponent },
  { path: 'success/:bookingId', component: SuccessComponent },
  { path: 'failure', component: FailureComponent },
  { path: '**', redirectTo: '' }
];
