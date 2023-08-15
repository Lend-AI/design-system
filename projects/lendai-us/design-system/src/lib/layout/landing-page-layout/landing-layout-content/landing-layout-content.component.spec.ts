import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLayoutContentComponent } from './landing-layout-content.component';

describe('LandingLayoutContentComponent', () => {
  let component: LandingLayoutContentComponent;
  let fixture: ComponentFixture<LandingLayoutContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingLayoutContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingLayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
