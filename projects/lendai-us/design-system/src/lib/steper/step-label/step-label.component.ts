import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  inject,
} from '@angular/core';
import { StepComponent } from '../step/step.component';
import { STEP_GROUP, StepGroup } from '../step-group/step-group';

@Component({
  selector: 'lai-step-label',
  templateUrl: './step-label.component.html',
  styleUrls: ['./step-label.component.scss'],
})
export class StepLabelComponent {
  @HostBinding('class.current')
  @Input()
  selected = false;

  @Input() step!: StepComponent;

  @Output() selectedChange = new EventEmitter<void>();

  parent: StepGroup = inject(STEP_GROUP);

  @HostListener('click')
  onSelectedChange(): void {
    this.selectedChange.emit();
  }
}
