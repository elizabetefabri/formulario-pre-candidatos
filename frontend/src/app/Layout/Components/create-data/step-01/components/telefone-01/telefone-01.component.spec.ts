import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Telefone01Component } from './telefone-01.component';

describe('Telefone01Component', () => {
  let component: Telefone01Component;
  let fixture: ComponentFixture<Telefone01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Telefone01Component]
    });
    fixture = TestBed.createComponent(Telefone01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
