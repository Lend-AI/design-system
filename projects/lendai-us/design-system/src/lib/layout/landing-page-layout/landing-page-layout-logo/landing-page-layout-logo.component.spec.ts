import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageLayoutLogoComponent } from './landing-page-layout-logo.component';

describe('LandingPageLayoutLogoComponent', () => {
  let component: LandingPageLayoutLogoComponent;
  let fixture: ComponentFixture<LandingPageLayoutLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageLayoutLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageLayoutLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
