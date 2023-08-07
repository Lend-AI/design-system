import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavLayoutCategoriesComponent } from './sidenav-layout-categories.component';

describe('SidenavLayoutCategoriesComponent', () => {
  let component: SidenavLayoutCategoriesComponent;
  let fixture: ComponentFixture<SidenavLayoutCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavLayoutCategoriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavLayoutCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
