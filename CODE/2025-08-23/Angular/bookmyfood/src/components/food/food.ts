import { Component } from '@angular/core';
import { Foodservice } from '../../services/foodservice';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Loginservice } from '../../services/loginservice';

@Component({
  selector: 'app-food',
  imports: [CommonModule],
  templateUrl: './food.html',
  styleUrl: './food.css',
})
export class Food {
  foods: Food[] = [];

  name: string = '';
  img: string = '';
  category: string = '';
  price: number = 0;

  constructor(
    private foodService: Foodservice,
    private router: Router,
    private loginService: Loginservice
  ) {}

  ngOnInit(): void {
    if (!this.loginService.getToken()) {
      this.router.navigate(['/login']);
      return;
    }

    this.foodService.getAllFoods().subscribe({
      next: (data) => {
        (this.foods = data), console.log(this.foods);
      },

      error: () => alert('Unauthorized or token expired!'),
    });
  }
}
