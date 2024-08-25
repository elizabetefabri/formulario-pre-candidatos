import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step03Component } from './step-03.component';

describe('Step03Component', () => {
  let component: Step03Component;
  let fixture: ComponentFixture<Step03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step03Component]
    });
    fixture = TestBed.createComponent(Step03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
