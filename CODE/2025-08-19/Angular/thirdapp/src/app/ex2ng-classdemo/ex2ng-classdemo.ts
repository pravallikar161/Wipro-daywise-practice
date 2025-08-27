import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-ex2ng-classdemo',
  imports: [NgClass, NgStyle],
  templateUrl: './ex2ng-classdemo.html',
  styleUrl: './ex2ng-classdemo.css',
})
export class Ex2ngClassdemo {
  flag1: boolean = true;
  flag2: boolean = true;

  getNgClass() {
    return {
      app1: this.flag1,
      app2: this.flag2,
    };
  }

  color1: string = 'blue';
  fontSize1: string = '30px';
}
