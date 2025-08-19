import { Component } from '@angular/core';
import { Conditioncomp } from '../conditioncomp/conditioncomp';
import { Switchdemo } from '../switchdemo/switchdemo';
import { FilteredNames } from '../filtered-names/filtered-names';
import { Home } from '../home/home';

@Component({
  selector: 'app-listcomp',
  imports: [Conditioncomp, Switchdemo, FilteredNames, Home],
  templateUrl: './listcomp.html',
  styleUrl: './listcomp.css',
})
export class Listcomp {
  namesList: string[] = ['Deekshitha', 'Amit', 'Ryan', 'Jack', 'Jhon'];
}
