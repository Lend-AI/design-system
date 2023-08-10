import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageLayoutActionsComponent } from './landing-page-layout-actions.component';

describe('LandingPageLayoutActionsComponent', () => {
  let component: LandingPageLayoutActionsComponent;
  let fixture: ComponentFixture<LandingPageLayoutActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageLayoutActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageLayoutActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
