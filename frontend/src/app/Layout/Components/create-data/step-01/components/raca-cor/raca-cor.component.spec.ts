import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacaCorComponent } from './raca-cor.component';

describe('RacaCorComponent', () => {
  let component: RacaCorComponent;
  let fixture: ComponentFixture<RacaCorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RacaCorComponent]
    });
    fixture = TestBed.createComponent(RacaCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
