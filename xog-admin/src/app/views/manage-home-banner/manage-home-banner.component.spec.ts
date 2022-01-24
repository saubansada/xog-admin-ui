import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHomeBannerComponent } from './manage-home-banner.component';

describe('ManageHomeBannerComponent', () => {
  let component: ManageHomeBannerComponent;
  let fixture: ComponentFixture<ManageHomeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageHomeBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHomeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
