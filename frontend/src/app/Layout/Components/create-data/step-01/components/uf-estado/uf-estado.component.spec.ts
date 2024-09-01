import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfEstadoComponent } from './uf-estado.component';

describe('UfEstadoComponent', () => {
  let component: UfEstadoComponent;
  let fixture: ComponentFixture<UfEstadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UfEstadoComponent]
    });
    fixture = TestBed.createComponent(UfEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
