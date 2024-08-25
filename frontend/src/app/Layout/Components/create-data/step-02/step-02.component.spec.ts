import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step02Component } from './step-02.component';

describe('Step02Component', () => {
  let component: Step02Component;
  let fixture: ComponentFixture<Step02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Step02Component]
    });
    fixture = TestBed.createComponent(Step02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
