import { Component, ViewChild, ElementRef } from '@angular/core';
import { IWords } from '../../shared/words';
import { URDUNOUNS } from '../../urdu/urdu-nouns';
import { URDUVERBS } from '../../urdu/urdu-verbs';
import { URDUPHRASES } from '../../urdu/urdu-phrases';
import { FRENCHNOUNS } from '../../french/french-nouns';
import { FRENCHVERBS } from '../../french/french-verbs';
import { FRENCHPHRASES } from '../../french/french-phrases';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  urduNouns: IWords[] = URDUNOUNS;
  urduVerbs: IWords[] = URDUVERBS;
  urduPhrases: IWords[] = URDUPHRASES;

  frenchNouns: IWords[] = FRENCHNOUNS;
  frenchVerbs: IWords[] = FRENCHVERBS;
  frenchPhrases: IWords[] = FRENCHPHRASES;

  @ViewChild('urduNounModal', { static: false }) urduNounModal: ElementRef;
  @ViewChild('urduVerbModal', { static: false }) urduVerbModal: ElementRef;
  @ViewChild('urduPhraseModal', { static: false }) urduPhraseModal: ElementRef;
  @ViewChild('frenchNounModal', { static: false }) frenchNounModal: ElementRef;
  @ViewChild('frenchVerbModal', { static: false }) frenchVerbModal: ElementRef;
  @ViewChild('frenchPhraseModal', { static: false })
  frenchPhraseModal: ElementRef;

  urduNounOpen() {
    this.urduNounModal.nativeElement.style.display = 'block';
  }

  urduVerbOpen() {
    this.urduVerbModal.nativeElement.style.display = 'block';
  }

  urduPhraseOpen() {
    this.urduPhraseModal.nativeElement.style.display = 'block';
  }

  frenchNounOpen() {
    this.frenchNounModal.nativeElement.style.display = 'block';
  }

  frenchVerbOpen() {
    this.frenchVerbModal.nativeElement.style.display = 'block';
  }

  frenchPhraseOpen() {
    this.frenchPhraseModal.nativeElement.style.display = 'block';
  }

  close() {
    this.urduNounModal.nativeElement.style.display = 'none';
    this.urduVerbModal.nativeElement.style.display = 'none';
    this.urduPhraseModal.nativeElement.style.display = 'none';
    this.frenchNounModal.nativeElement.style.display = 'none';
    this.frenchVerbModal.nativeElement.style.display = 'none';
    this.frenchPhraseModal.nativeElement.style.display = 'none';
  }
}
