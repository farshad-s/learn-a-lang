import { Component, OnInit } from '@angular/core';
import { ICategories } from '../shared/categories';
import { CATEGORIES } from '../shared/categories-list';

@Component({
  selector: 'app-french',
  templateUrl: './french.component.html',
  styleUrls: ['./french.component.css'],
})
export class FrenchComponent implements OnInit {
  categories: ICategories[] = CATEGORIES;

  constructor() {}

  ngOnInit(): void {}
}
