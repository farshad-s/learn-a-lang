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
    console.log(this.languageCards[i].language);
  }

  constructor() {}

  ngOnInit(): void {}
}
