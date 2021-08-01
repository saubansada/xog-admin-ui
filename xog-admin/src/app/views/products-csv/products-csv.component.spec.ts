import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCsvComponent } from './products-csv.component';

describe('ProductsCsvComponent', () => {
  let component: ProductsCsvComponent;
  let fixture: ComponentFixture<ProductsCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsCsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
