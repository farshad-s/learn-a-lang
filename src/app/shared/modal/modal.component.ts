import { Component, ViewChild, ElementRef } from '@angular/core';
import { IWords } from '../../shared/words';
import { WORDS } from '../../urdu/urdu-words';
import { VERBS } from '../../urdu/urdu-verbs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  urduWords: IWords[] = WORDS;
  urduVerbs: IWords[] = VERBS;

  @ViewChild('nounModal', { static: false }) nounModal: ElementRef;
  @ViewChild('verbModal', { static: false }) verbModal: ElementRef;
  @ViewChild('phraseModal', { static: false }) phraseModal: ElementRef;

  nounOpen() {
    this.nounModal.nativeElement.style.display = 'block';
  }

  verbOpen() {
    this.verbModal.nativeElement.style.display = 'block';
  }

  phraseOpen() {
    this.phraseModal.nativeElement.style.display = 'block';
  }

  close() {
    this.nounModal.nativeElement.style.display = 'none';
    this.verbModal.nativeElement.style.display = 'none';
    this.phraseModal.nativeElement.style.display = 'none';
  }
}
