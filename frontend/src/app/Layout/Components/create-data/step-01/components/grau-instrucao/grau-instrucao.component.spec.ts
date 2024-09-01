import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrauInstrucaoComponent } from './grau-instrucao.component';

describe('GrauInstrucaoComponent', () => {
  let component: GrauInstrucaoComponent;
  let fixture: ComponentFixture<GrauInstrucaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrauInstrucaoComponent]
    });
    fixture = TestBed.createComponent(GrauInstrucaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
