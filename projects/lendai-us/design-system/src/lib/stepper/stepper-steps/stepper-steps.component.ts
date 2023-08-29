import {
  Component,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { StepComponent } from '../stepper-step/step.component';

@Component({
  selector: 'lai-stepper-steps',
  templateUrl: './stepper-steps.component.html',
  styleUrls: ['./stepper-steps.component.scss'],
})
export class StepGroupHeaderComponent {
  @Input() steps!: QueryList<StepComponent>;
  @Input() activeStepIndex!: number;

  @Output() selectedChange = new EventEmitter<number>();
}
