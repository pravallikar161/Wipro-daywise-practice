import { Component, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Reactiveforms } from './reactiveforms/reactiveforms';
import { Reactiveforms2 } from './reactiveforms2/reactiveforms2';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatListModule, Reactiveforms, Reactiveforms2],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'City-List';

  cities: string[] = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];
}
