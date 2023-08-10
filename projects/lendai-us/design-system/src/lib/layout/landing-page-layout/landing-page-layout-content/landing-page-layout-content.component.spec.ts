import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageLayoutContentComponent } from './landing-page-layout-content.component';

describe('LandingPageLayoutContentComponent', () => {
  let component: LandingPageLayoutContentComponent;
  let fixture: ComponentFixture<LandingPageLayoutContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageLayoutContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageLayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
