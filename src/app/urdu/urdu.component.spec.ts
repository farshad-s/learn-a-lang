import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrduComponent } from './urdu.component';

describe('UrduComponent', () => {
  let component: UrduComponent;
  let fixture: ComponentFixture<UrduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
