import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepGroupHeaderComponent } from './stepper-steps.component';

describe('StepHeaderComponent', () => {
  let component: StepGroupHeaderComponent;
  let fixture: ComponentFixture<StepGroupHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepGroupHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepGroupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
