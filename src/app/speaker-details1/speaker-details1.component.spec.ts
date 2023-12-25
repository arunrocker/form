import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerDetails1Component } from './speaker-details1.component';

describe('SpeakerDetails1Component', () => {
  let component: SpeakerDetails1Component;
  let fixture: ComponentFixture<SpeakerDetails1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakerDetails1Component]
    });
    fixture = TestBed.createComponent(SpeakerDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
