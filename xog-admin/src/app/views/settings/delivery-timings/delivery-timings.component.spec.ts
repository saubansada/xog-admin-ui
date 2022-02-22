import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryTimingsComponent } from './delivery-timings.component';

describe('DeliveryTimingsComponent', () => {
  let component: DeliveryTimingsComponent;
  let fixture: ComponentFixture<DeliveryTimingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryTimingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
