import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step04Component } from './step-04.component';

describe('Step04Component', () => {
  let component: Step04Component;
  let fixture: ComponentFixture<Step04Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step04Component]
    });
    fixture = TestBed.createComponent(Step04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
