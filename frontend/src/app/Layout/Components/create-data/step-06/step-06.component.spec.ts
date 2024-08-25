import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step06Component } from './step-06.component';

describe('Step06Component', () => {
  let component: Step06Component;
  let fixture: ComponentFixture<Step06Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step06Component]
    });
    fixture = TestBed.createComponent(Step06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
