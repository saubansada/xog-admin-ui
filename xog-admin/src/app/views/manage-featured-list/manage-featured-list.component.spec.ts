import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFeaturedListComponent } from './manage-featured-list.component';

describe('ManageFeaturedListComponent', () => {
  let component: ManageFeaturedListComponent;
  let fixture: ComponentFixture<ManageFeaturedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageFeaturedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFeaturedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
