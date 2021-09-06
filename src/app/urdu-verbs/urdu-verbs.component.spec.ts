import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrduVerbsComponent } from './urdu-verbs.component';

describe('UrduVerbsComponent', () => {
  let component: UrduVerbsComponent;
  let fixture: ComponentFixture<UrduVerbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrduVerbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrduVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
