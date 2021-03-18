import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ICategories } from '../shared/categories';
import { CATEGORIES } from '../shared/categories-list';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-urdu',
  templateUrl: './urdu.component.html',
  styleUrls: ['./urdu.component.scss'],
})
export class UrduComponent implements OnInit {
  categories: ICategories[] = CATEGORIES;

  constructor() {}

  ngOnInit(): void {}

  @ViewChild('urduNounModal', { static: false }) urduNounModal: ModalComponent;
  @ViewChild('urduVerbModal', { static: false }) urduVerbModal: ModalComponent;
  @ViewChild('urduPhraseModal', { static: false })
  urduPhraseModal: ModalComponent;
  @ViewChild('testing2', { static: false }) testing2: ModalComponent;

  openNounModal() {
    this.urduNounModal.urduAnimalOpen();
  }

  openVerbModal() {
    this.urduVerbModal.urduVerbOpen();
  }

  openPhraseModal() {
    this.urduPhraseModal.urduPhraseOpen();
  }
}
