import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingDefaultComponent } from './setting-default.component';

describe('SettingDefaultComponent', () => {
  let component: SettingDefaultComponent;
  let fixture: ComponentFixture<SettingDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
