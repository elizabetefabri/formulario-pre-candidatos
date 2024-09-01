import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloEleitoralComponent } from './titulo-eleitoral.component';

describe('TituloEleitoralComponent', () => {
  let component: TituloEleitoralComponent;
  let fixture: ComponentFixture<TituloEleitoralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TituloEleitoralComponent]
    });
    fixture = TestBed.createComponent(TituloEleitoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
