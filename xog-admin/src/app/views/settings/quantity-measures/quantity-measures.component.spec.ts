import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityMeasuresComponent } from './quantity-measures.component';

describe('QuantityMeasuresComponent', () => {
  let component: QuantityMeasuresComponent;
  let fixture: ComponentFixture<QuantityMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuantityMeasuresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
