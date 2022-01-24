import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourBannersComponent } from './four-banners.component';

describe('FourBannersComponent', () => {
  let component: FourBannersComponent;
  let fixture: ComponentFixture<FourBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourBannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
