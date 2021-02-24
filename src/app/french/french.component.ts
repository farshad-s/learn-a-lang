import { Component, OnInit, ViewChild } from '@angular/core';
import { ICategories } from '../shared/categories';
import { CATEGORIES } from '../shared/categories-list';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-french',
  templateUrl: './french.component.html',
  styleUrls: ['./french.component.css'],
})
export class FrenchComponent implements OnInit {
  categories: ICategories[] = CATEGORIES;

  constructor() {}

  @ViewChild('frenchNounModal', { static: false })
  frenchNounModal: ModalComponent;
  @ViewChild('frenchPhraseModal', { static: false })
  frenchPhraseModal: ModalComponent;

  openNounModal() {
    this.frenchNounModal.frenchNounOpen();
  }

  openPhraseModal() {
    this.frenchPhraseModal.frenchPhraseOpen();
  }

  ngOnInit(): void {}
}
