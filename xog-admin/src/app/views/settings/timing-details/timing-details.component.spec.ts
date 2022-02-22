import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingDetailsComponent } from './timing-details.component';

describe('TimingDetailsComponent', () => {
  let component: TimingDetailsComponent;
  let fixture: ComponentFixture<TimingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
