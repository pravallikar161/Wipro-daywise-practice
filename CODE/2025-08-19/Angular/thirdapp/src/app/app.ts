import { Component, signal } from '@angular/core';
import { Ex2ngClassdemo } from './ex2ng-classdemo/ex2ng-classdemo';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Ex2ngClassdemo],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('thirdapp');
}
