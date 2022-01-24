import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFourbannersComponent } from './add-fourbanners.component';

describe('AddFourbannersComponent', () => {
  let component: AddFourbannersComponent;
  let fixture: ComponentFixture<AddFourbannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFourbannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFourbannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
