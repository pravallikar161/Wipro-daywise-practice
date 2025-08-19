import { Component } from '@angular/core';
import { Ex15BookList } from '../ex15-book-list/ex15-book-list';

@Component({
  selector: 'app-home',
  imports: [Ex15BookList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
