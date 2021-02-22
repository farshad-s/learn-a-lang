import { Component, OnInit, ViewChild } from '@angular/core';
import { ICategories } from '../shared/categories';
import { CATEGORIES } from '../shared/categories-list';
import { IWords } from '../shared/words';
import { WORDS } from './urdu-words';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-urdu',
  templateUrl: './urdu.component.html',
  styleUrls: ['./urdu.component.css'],
})
export class UrduComponent implements OnInit {
  categories: ICategories[] = CATEGORIES;
  urduWords: IWords[] = WORDS;

  constructor() {}

  ngOnInit(): void {}

  @ViewChild('nounModal', { static: false }) nounModal: ModalComponent;
  @ViewChild('verbModal', { static: false }) verbModal: ModalComponent;
  @ViewChild('phraseModal', { static: false }) phraseModal: ModalComponent;

  openNounModal() {
    this.nounModal.nounOpen();
  }

  openVerbModal() {
    this.verbModal.verbOpen();
  }

  openPhraseModal() {
    this.phraseModal.phraseOpen();
  }
}
