import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step07Component } from './step-07.component';

describe('Step07Component', () => {
  let component: Step07Component;
  let fixture: ComponentFixture<Step07Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step07Component]
    });
    fixture = TestBed.createComponent(Step07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
