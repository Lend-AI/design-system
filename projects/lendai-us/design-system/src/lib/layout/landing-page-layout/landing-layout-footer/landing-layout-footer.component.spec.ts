import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLayoutFooterComponent } from './landing-layout-footer.component';

describe('LandingLayoutFooterComponent', () => {
  let component: LandingLayoutFooterComponent;
  let fixture: ComponentFixture<LandingLayoutFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingLayoutFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
