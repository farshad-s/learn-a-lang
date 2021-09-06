import { Component, OnInit } from '@angular/core';
import { ITypes } from '../shared/types';
import { VERBTYPES } from '../shared/verb-types';

@Component({
  selector: 'app-urdu-verbs',
  templateUrl: './urdu-verbs.component.html',
  styleUrls: ['./urdu-verbs.component.css'],
})
export class UrduVerbsComponent implements OnInit {
  types: ITypes[] = VERBTYPES;

  constructor() {}

  ngOnInit(): void {}
}
