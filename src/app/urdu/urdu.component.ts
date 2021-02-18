import { Component, OnInit } from '@angular/core';
import { ICategories } from './categories';
import { CATEGORIES } from './categories-list';

@Component({
  selector: 'app-urdu',
  templateUrl: './urdu.component.html',
  styleUrls: ['./urdu.component.css'],
})
export class UrduComponent implements OnInit {
  categories: ICategories[] = CATEGORIES;

  constructor() {}

  ngOnInit(): void {}
}
