import { Routes } from '@angular/router';
import { Login } from '../login/login';
import { Food } from '../food/food';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'food', component: Food },
];
