import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneotpComponent } from './phoneotp.component';

describe('PhoneotpComponent', () => {
  let component: PhoneotpComponent;
  let fixture: ComponentFixture<PhoneotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneotpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
