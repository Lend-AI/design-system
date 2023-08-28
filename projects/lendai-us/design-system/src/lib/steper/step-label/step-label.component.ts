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
  @HostBinding('class.current')
  @Input()
  selected = false;

  @Input() step!: StepComponent;

  @Output() selectedChange = new EventEmitter<void>();

  @HostListener('click')
  onSelectedChange(): void {
    this.selectedChange.emit();
  }
}
