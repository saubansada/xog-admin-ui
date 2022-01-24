import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTopBrandsComponent } from './manage-top-brands.component';

describe('ManageTopBrandsComponent', () => {
  let component: ManageTopBrandsComponent;
  let fixture: ComponentFixture<ManageTopBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTopBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTopBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
