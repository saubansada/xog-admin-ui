import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDesktopComponent } from './manage-desktop.component';

describe('ManageDesktopComponent', () => {
  let component: ManageDesktopComponent;
  let fixture: ComponentFixture<ManageDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
