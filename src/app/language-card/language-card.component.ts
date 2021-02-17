import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.css'],
})
export class LanguageCardComponent implements OnInit {
  languageCards: any[] = [
    {
      language: 'Urdu',
      greeting: 'ہیلو دنیا',
      button: 'Click here to get started!',
      available: true,
    },
    {
      language: 'French',
      greeting: 'Bonjour le monde',
      button: 'Currently not available',
      available: false,
    },
    {
      language: 'Spanish',
      greeting: 'Hola Mundo',
      button: 'Currently not available',
      available: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
