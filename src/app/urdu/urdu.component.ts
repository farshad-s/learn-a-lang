import { Component, OnInit, ViewChild } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {}

  @ViewChild('urduNounModal', { static: false }) urduNounModal: ModalComponent;
  @ViewChild('urduVerbModal', { static: false }) urduVerbModal: ModalComponent;
  @ViewChild('urduPhraseModal', { static: false })
  urduPhraseModal: ModalComponent;

  openNounModal() {
    this.urduNounModal.urduNounOpen();
  }

  openVerbModal() {
    this.urduVerbModal.urduVerbOpen();
  }

  openPhraseModal() {
    this.urduPhraseModal.urduPhraseOpen();
  }
}
