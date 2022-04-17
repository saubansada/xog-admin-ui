import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransReportsComponent } from './trans-reports.component';

describe('TransReportsComponent', () => {
  let component: TransReportsComponent;
  let fixture: ComponentFixture<TransReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
