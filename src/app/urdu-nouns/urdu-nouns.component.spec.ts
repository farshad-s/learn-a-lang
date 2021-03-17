import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrduNounsComponent } from './urdu-nouns.component';

describe('UrduNounsComponent', () => {
  let component: UrduNounsComponent;
  let fixture: ComponentFixture<UrduNounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrduNounsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrduNounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
