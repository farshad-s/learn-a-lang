import { Component, OnInit } from '@angular/core';
import { ILanguage } from './language';
import { LANGUAGECARDS } from './language-list';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.css'],
})
export class LanguageCardComponent implements OnInit {
  languageCards: ILanguage[] = LANGUAGECARDS;

  selectClicked(i): void {
    this.languageCards[i].available === false
      ? alert(this.languageCards[i].language + ' is currently unavailable')
      : '';
  }

  constructor() {}

  ngOnInit(): void {}
}
