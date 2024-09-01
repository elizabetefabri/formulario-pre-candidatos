import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataExpedicaoRgComponent } from './data-expedicao-rg.component';

describe('DataExpedicaoRgComponent', () => {
  let component: DataExpedicaoRgComponent;
  let fixture: ComponentFixture<DataExpedicaoRgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataExpedicaoRgComponent]
    });
    fixture = TestBed.createComponent(DataExpedicaoRgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
