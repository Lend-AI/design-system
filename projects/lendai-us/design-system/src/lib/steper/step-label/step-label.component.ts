import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'lai-step-label',
  templateUrl: './step-label.component.html',
  styleUrls: ['./step-label.component.scss'],
})
export class StepLabelComponent {
  @Input() step!: StepComponent;
  @Input() state: StepState = 'current';

  @Output() selectedChange = new EventEmitter<void>();

  @HostBinding('class')
  get classes(): string {
    return this.state;
  }

  @HostListener('click')
  onSelectedChange(): void {
    this.selectedChange.emit();
  }
}

export type StepState = 'current' | 'previous' | 'next';
