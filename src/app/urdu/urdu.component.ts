import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ICategories } from '../shared/categories';
import { CATEGORIES } from '../shared/categories-list';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-urdu',
  templateUrl: './urdu.component.html',
  styleUrls: ['./urdu.component.css'],
})
export class UrduComponent implements OnInit {
  categories: ICategories[] = CATEGORIES;
  tests = [
    {
      language: 'Urdu',
      type: 'Noun',
      word: 'hello',
      translation: 'hey',
    },
    {
      language: 'Urdu',
      type: 'Noun',
      word: 'help',
      translation: 'me',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  @ViewChild('urduNounModal', { static: false }) urduNounModal: ModalComponent;
  @ViewChild('urduVerbModal', { static: false }) urduVerbModal: ModalComponent;
  @ViewChild('urduPhraseModal', { static: false })
  urduPhraseModal: ModalComponent;
  @ViewChild('testing', { static: false }) testing: ElementRef;

  openNounModal() {
    this.urduNounModal.urduNounOpen();
    console.log(this.tests[0].language);
  }

  openTest() {
    this.testing.nativeElement.style.display = 'block';
  }

  close() {
    this.testing.nativeElement.style.display = 'none';
  }
  openVerbModal() {
    this.urduVerbModal.urduVerbOpen();
  }

  openPhraseModal() {
    this.urduPhraseModal.urduPhraseOpen();
  }
}
