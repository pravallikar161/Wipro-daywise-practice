import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ivechile } from './ivechile';

@Injectable({
  providedIn: 'root',
})
export class Vechileservice {
  constructor(private http: HttpClient) {}

  getVechiles(): Observable<Ivechile[]> {
    return this.http.get<Ivechile[]>('http://localhost:3000/vechile');
  }

  getVechileById(vechileId: string): Observable<Ivechile> {
    return this.http.get<Ivechile>('http://localhost:3000/vechile/' + vechileId);
  }

  updateVechile(vechile: Ivechile): Observable<Ivechile> {
    return this.http.put<Ivechile>(`http://localhost:3000/vechile/${vechile.id}`, vechile);
  }

  deleteVechile(vechileId: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/vechile/${vechileId}`);
  }

  saveVechile(vechile: Ivechile): Observable<Ivechile> {
    let vechileSave: Omit<Ivechile, 'id'> = {
      make: vechile.make,
      model: vechile.model,
      fuelType: vechile.fuelType,
      price: vechile.price,
    };
    return this.http.post<Ivechile>('http://localhost:3000/vechile', vechileSave);
  }
}
