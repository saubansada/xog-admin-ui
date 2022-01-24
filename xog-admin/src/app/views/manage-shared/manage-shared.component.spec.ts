import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSharedComponent } from './manage-shared.component';

describe('ManageSharedComponent', () => {
  let component: ManageSharedComponent;
  let fixture: ComponentFixture<ManageSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
