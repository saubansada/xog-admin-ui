import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCustomOfferComponent } from './mobile-custom-offer.component';

describe('MobileCustomOfferComponent', () => {
  let component: MobileCustomOfferComponent;
  let fixture: ComponentFixture<MobileCustomOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileCustomOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCustomOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
