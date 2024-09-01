import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupacaoProfissionalComponent } from './ocupacao-profissional.component';

describe('OcupacaoProfissionalComponent', () => {
  let component: OcupacaoProfissionalComponent;
  let fixture: ComponentFixture<OcupacaoProfissionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OcupacaoProfissionalComponent]
    });
    fixture = TestBed.createComponent(OcupacaoProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
