import { Component, Input } from '@angular/core';
import { StepComponent } from '../stepper-step/step.component';

@Component({
  selector: 'lai-stepper-body',
  templateUrl: './stepper-body.component.html',
  styleUrls: ['./stepper-body.component.scss'],
})
export class StepperBodyComponent {
  @Input() step!: StepComponent;
}
