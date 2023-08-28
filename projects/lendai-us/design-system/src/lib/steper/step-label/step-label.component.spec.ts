import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepLabelComponent } from './step-label.component';

describe('StepLabelComponent', () => {
  let component: StepLabelComponent;
  let fixture: ComponentFixture<StepLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
