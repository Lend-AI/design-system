import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLayoutHeaderComponent } from './landing-layout-header.component';

describe('LandingLayoutCategoriesComponent', () => {
  let component: LandingLayoutHeaderComponent;
  let fixture: ComponentFixture<LandingLayoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingLayoutHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
