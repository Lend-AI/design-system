import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLayoutCategoriesComponent } from './landing-layout-categories.component';

describe('LandingLayoutCategoriesComponent', () => {
  let component: LandingLayoutCategoriesComponent;
  let fixture: ComponentFixture<LandingLayoutCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingLayoutCategoriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingLayoutCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
