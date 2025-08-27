import { Component, signal } from '@angular/core';
import { Movielistcomp } from './movielistcomp/movielistcomp';

@Component({
  selector: 'app-root',
  imports: [Movielistcomp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('movieapp');
}
