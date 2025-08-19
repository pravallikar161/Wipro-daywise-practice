import { Component } from '@angular/core';

@Component({
  selector: 'app-conditioncomp',
  imports: [],
  templateUrl: './conditioncomp.html',
  styleUrl: './conditioncomp.css',
})
export class Conditioncomp {
  // falg: boolean = false;

  // toggle() {
  //   this.falg = !this.falg;
  // }

  countryNames: string[] = ['India', 'Korea', 'USA', 'Europe'];

  flag: boolean = false;

  load() {
    this.flag = true;
  }
}
