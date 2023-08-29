import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLayoutActionsComponent } from './landing-layout-actions.component';

describe('LandingLayoutActionsComponent', () => {
  let component: LandingLayoutActionsComponent;
  let fixture: ComponentFixture<LandingLayoutActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingLayoutActionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingLayoutActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
