import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandReportsComponent } from './brand-reports.component';

describe('BrandReportsComponent', () => {
  let component: BrandReportsComponent;
  let fixture: ComponentFixture<BrandReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
