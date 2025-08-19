import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ex15-book-list',
  imports: [NgFor],
  templateUrl: './ex15-book-list.html',
  styleUrl: './ex15-book-list.css',
})
export class Ex15BookList {
  books = [
    {
      title: 'Book 1',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 2',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 3',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 4',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 5',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 6',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 7',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 8',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 9',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 10',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 11',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 12',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 13',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 14',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 15',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 16',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 17',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 18',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 19',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
    {
      title: 'Book 20',
      img: 'https://i.pinimg.com/564x/a3/3f/86/a33f86fcd8edba60c037318f43346c6d.jpg',
      description: 'This is about the book',
    },
  ];
}
