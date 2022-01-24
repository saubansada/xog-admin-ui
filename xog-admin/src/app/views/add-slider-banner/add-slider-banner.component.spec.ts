import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSliderBannerComponent } from './add-slider-banner.component';

describe('AddSliderBannerComponent', () => {
  let component: AddSliderBannerComponent;
  let fixture: ComponentFixture<AddSliderBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSliderBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSliderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
