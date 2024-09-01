import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataNascimentoComponent } from './data-nascimento.component';

describe('DataNascimentoComponent', () => {
  let component: DataNascimentoComponent;
  let fixture: ComponentFixture<DataNascimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataNascimentoComponent]
    });
    fixture = TestBed.createComponent(DataNascimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
