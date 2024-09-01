import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCivilComponent } from './estado-civil.component';

describe('EstadoCivilComponent', () => {
  let component: EstadoCivilComponent;
  let fixture: ComponentFixture<EstadoCivilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstadoCivilComponent]
    });
    fixture = TestBed.createComponent(EstadoCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
