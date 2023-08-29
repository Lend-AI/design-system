import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './stepper-step/step.component';
import { StepperBodyComponent } from './stepper-body/stepper-body.component';
import { StepGroupHeaderComponent } from './stepper-steps/stepper-steps.component';
import { BodyComponent } from '../typography';
import { IconComponent } from '../icon';
import { StepperComponent } from './stepper.component';

@NgModule({
  declarations: [
    StepperComponent,
    StepComponent,
    StepperBodyComponent,
    StepGroupHeaderComponent,
  ],
  imports: [CommonModule, BodyComponent, IconComponent],
  exports: [StepperComponent, StepComponent],
})
export class StepperModule {}
