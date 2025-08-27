import { Component, signal } from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CentitofahrenPipe } from './centitofahren-pipe';
import { Highlightandstrikedir } from './highlightandstrikedir';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    CommonModule,
    UpperCasePipe,
    DatePipe,
    ReactiveFormsModule,
    CentitofahrenPipe,
    Highlightandstrikedir,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pipedirdemo');
  textEntered: string = '';

  dateControl = new FormControl();

  date: string | null = null;

  centigrade: number = 20;
}
