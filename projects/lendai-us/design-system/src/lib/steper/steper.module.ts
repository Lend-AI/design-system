import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepGroupComponent } from './step-group/step-group.component';
import { StepComponent } from './step/step.component';
import { StepLabelComponent } from './step-label/step-label.component';
import { StepGroupBodyComponent } from './step-group-body/step-group-body.component';
import { StepGroupHeaderComponent } from './step-group-header/step-group-header.component';
import { BodyComponent } from '../typography';
import { IconComponent } from '../icon';

@NgModule({
  declarations: [
    StepGroupComponent,
    StepComponent,
    StepLabelComponent,
    StepGroupBodyComponent,
    StepGroupHeaderComponent,
  ],
  imports: [CommonModule, BodyComponent, IconComponent],
  exports: [StepGroupComponent, StepComponent],
})
export class SteperModule {}
