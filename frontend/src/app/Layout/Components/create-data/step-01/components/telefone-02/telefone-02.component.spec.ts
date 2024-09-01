import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Telefone02Component } from './telefone-02.component';

describe('Telefone02Component', () => {
  let component: Telefone02Component;
  let fixture: ComponentFixture<Telefone02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Telefone02Component]
    });
    fixture = TestBed.createComponent(Telefone02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
