import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  pageTitle: string = 'Learn a Language';
  homepage: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
