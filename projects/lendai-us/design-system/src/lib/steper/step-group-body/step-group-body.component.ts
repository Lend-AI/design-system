import { Component, Input } from '@angular/core';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'lai-step-group-body',
  templateUrl: './step-group-body.component.html',
  styleUrls: ['./step-group-body.component.scss'],
})
export class StepGroupBodyComponent {
  @Input() step!: StepComponent;
}
