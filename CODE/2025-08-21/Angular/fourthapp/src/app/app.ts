import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vechilecomp } from './vechilecomp/vechilecomp';

@Component({
  selector: 'app-root',
  imports: [Vechilecomp],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('fourthapp');
}
