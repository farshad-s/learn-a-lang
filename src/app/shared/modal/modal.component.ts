import { Component, ViewChild, ElementRef } from '@angular/core';
import { IWords } from '../../shared/words';
import { URDUANIMALS } from '../../urdu-nouns/urdu-animals';
import { URDUFRUITS } from '../../urdu-nouns/urdu-fruits';
import { URDUVERBS } from '../../urdu/urdu-verbs';
import { URDUPHRASES } from '../../urdu/urdu-phrases';
import { FRENCHNOUNS } from '../../french/french-nouns';
import { FRENCHVERBS } from '../../french/french-verbs';
import { FRENCHPHRASES } from '../../french/french-phrases';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  urduAnimals: IWords[] = URDUANIMALS;
  urduFruits: IWords[] = URDUFRUITS;

  urduVerbs: IWords[] = URDUVERBS;
  urduPhrases: IWords[] = URDUPHRASES;

  frenchNouns: IWords[] = FRENCHNOUNS;
  frenchVerbs: IWords[] = FRENCHVERBS;
  frenchPhrases: IWords[] = FRENCHPHRASES;

  private element: any;

  constructor(el: ElementRef) {
    this.element = el.nativeElement;
  }

  @ViewChild('urduAnimalsModal', { static: false })
  urduAnimalsModal: ElementRef;
  @ViewChild('urduFruitModal', { static: false })
  urduFruitModal: ElementRef;
  @ViewChild('urduVerbModal', { static: false }) urduVerbModal: ElementRef;
  @ViewChild('urduPhraseModal', { static: false }) urduPhraseModal: ElementRef;
  @ViewChild('frenchNounModal', { static: false }) frenchNounModal: ElementRef;
  @ViewChild('frenchVerbModal', { static: false }) frenchVerbModal: ElementRef;
  @ViewChild('frenchPhraseModal', { static: false })
  frenchPhraseModal: ElementRef;

  urduAnimalOpen() {
    this.urduAnimalsModal.nativeElement.style.display = 'block';
  }

  urduFruitOpen() {
    this.urduFruitModal.nativeElement.style.display = 'block';
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
    this.urduAnimalsModal.nativeElement.style.display = 'none';
    this.urduFruitModal.nativeElement.style.display = 'none';
    this.urduVerbModal.nativeElement.style.display = 'none';
    this.urduPhraseModal.nativeElement.style.display = 'none';
    this.frenchNounModal.nativeElement.style.display = 'none';
    this.frenchVerbModal.nativeElement.style.display = 'none';
    this.frenchPhraseModal.nativeElement.style.display = 'none';
  }

  ngOnInit(): void {
    this.element.addEventListener('click', (el) => {
      if (el.target.className === 'container') {
        this.close();
      }
    });
  }
}
