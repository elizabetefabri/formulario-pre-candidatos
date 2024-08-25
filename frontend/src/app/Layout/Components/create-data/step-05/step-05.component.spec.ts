import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step05Component } from './step-05.component';

describe('Step05Component', () => {
  let component: Step05Component;
  let fixture: ComponentFixture<Step05Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step05Component]
    });
    fixture = TestBed.createComponent(Step05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
