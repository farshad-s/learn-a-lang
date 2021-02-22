import { Component, OnInit, ViewChild } from '@angular/core';
import { ICategories } from '../shared/categories';
import { CATEGORIES } from '../shared/categories-list';
import { ModalComponent } from '../shared/modal/modal.component';
import { IWords } from '../shared/words';
import { WORDS } from './urdu-words';

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

  @ViewChild('modal', { static: false }) modal: ModalComponent;

  openModal() {
    this.modal.open();
    for (let i = 0; i < this.urduWords.length; i++) {
      this.modal.modal.nativeElement.firstChild.firstChild.innerText +=
        ' Word: ' +
        this.urduWords[i].word +
        ' Translation: ' +
        this.urduWords[i].translation;
    }
    console.log(this.modal);
    console.log(this.modal.modal);
    console.log(this.modal.modal.nativeElement);
    console.log(this.modal.modal.nativeElement.firstChild.firstChild);
    console.log(this.modal.modal.nativeElement.firstChild.lastChild);
  }
}
