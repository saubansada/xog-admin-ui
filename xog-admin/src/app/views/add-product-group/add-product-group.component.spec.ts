import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductGroupComponent } from './add-prodouct-group.component';

describe('AddProductGroupComponent', () => {
  let component: AddProductGroupComponent;
  let fixture: ComponentFixture<AddProductGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
