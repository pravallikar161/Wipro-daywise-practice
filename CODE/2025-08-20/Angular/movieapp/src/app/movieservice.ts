import { Injectable } from '@angular/core';
import { Imovie } from './imovie';

@Injectable({
  providedIn: 'root',
})
export class Movieservice {
  movieList: Imovie[] = [
    {
      movieId: 'm01',
      movieName: 'Inception',
      movieLanguage: 'English',
      imdbRating: 8.8,
    },
    {
      movieId: 'm06',
      movieName: '3 Idiots',
      movieLanguage: 'Hindi',
      imdbRating: 8.4,
    },
    {
      movieId: 'm08',
      movieName: 'The Godfather',
      movieLanguage: 'English',
      imdbRating: 9.2,
    },
    {
      movieId: 'm04',
      movieName: 'The Dark Knight',
      movieLanguage: 'English',
      imdbRating: 9.0,
    },
  ];
}
