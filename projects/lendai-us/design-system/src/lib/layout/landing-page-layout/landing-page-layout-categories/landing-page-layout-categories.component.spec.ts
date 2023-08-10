import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageLayoutCategoriesComponent } from './landing-page-layout-categories.component';

describe('LandingPageLayoutCategoriesComponent', () => {
  let component: LandingPageLayoutCategoriesComponent;
  let fixture: ComponentFixture<LandingPageLayoutCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageLayoutCategoriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageLayoutCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
