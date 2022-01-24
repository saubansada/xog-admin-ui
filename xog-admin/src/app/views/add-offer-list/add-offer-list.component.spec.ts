import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfferListComponent } from './add-offer-list.component';

describe('AddOfferListComponent', () => {
  let component: AddOfferListComponent;
  let fixture: ComponentFixture<AddOfferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOfferListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
