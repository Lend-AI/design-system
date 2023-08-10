import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageLayoutFooterComponent } from './landing-page-layout-footer.component';

describe('LandingPageLayoutFooterComponent', () => {
  let component: LandingPageLayoutFooterComponent;
  let fixture: ComponentFixture<LandingPageLayoutFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageLayoutFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
