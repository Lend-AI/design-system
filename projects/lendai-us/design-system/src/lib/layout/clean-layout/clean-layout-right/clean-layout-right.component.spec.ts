import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanLayoutRightComponent } from './clean-layout-right.component';

describe('CleanLayoutRightComponent', () => {
  let component: CleanLayoutRightComponent;
  let fixture: ComponentFixture<CleanLayoutRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CleanLayoutRightComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CleanLayoutRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
