
// src/app/failure/failure.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-failure',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './failure.html'
})
export class FailureComponent {}
