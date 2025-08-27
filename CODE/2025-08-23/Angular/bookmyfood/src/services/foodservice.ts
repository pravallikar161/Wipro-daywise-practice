import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loginservice } from './loginservice';
import { Food } from '../components/food/food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Foodservice {
  constructor(private http: HttpClient, private loginService: Loginservice) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getAllFoods(): Observable<Food[]> {
    const BASE_URL = 'http://localhost:9010/food';
    return this.http.get<Food[]>(BASE_URL, { headers: this.getAuthHeaders() });
  }
}
