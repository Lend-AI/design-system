import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepNavBarLinkComponent } from './step-nav-bar-link.component';

describe('StepNavbarLinkComponent', () => {
  let component: StepNavBarLinkComponent;
  let fixture: ComponentFixture<StepNavBarLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepNavBarLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepNavBarLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
