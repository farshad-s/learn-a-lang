import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ITypes } from '../shared/types';
import { TYPES } from '../shared/types-list';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-urdu-nouns',
  templateUrl: './urdu-nouns.component.html',
  styleUrls: ['./urdu-nouns.component.css'],
})
export class UrduNounsComponent implements OnInit {
  types: ITypes[] = TYPES;

  constructor() {}

  ngOnInit(): void {}

  @ViewChild('urduNounModal', { static: false }) urduNounModal: ModalComponent;

  openNounModal() {
    this.urduNounModal.urduNounOpen();
  }
}
