import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepGroupBodyComponent } from './step-group-body.component';

describe('StepBodyComponent', () => {
  let component: StepGroupBodyComponent;
  let fixture: ComponentFixture<StepGroupBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepGroupBodyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StepGroupBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
