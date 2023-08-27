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
import { BodyLevel } from '../../typography';
import { IconSize } from '../../icon';
import {
  STEP_GROUP_SIZE_TO_BODY_LEVEL,
  STEP_GROUP_SIZE_TO_ICON_SIZE,
} from '../shared';
import { STEP_GROUP, StepGroup } from '../step-group/step-group';

@Component({
  selector: 'lai-step-label',
  templateUrl: './step-label.component.html',
  styleUrls: ['./step-label.component.scss'],
})
export class StepLabelComponent {
  @HostBinding('class.selected')
  @Input()
  selected = false;

  @Input() step!: StepComponent;

  @Output() selectedChange = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  parent: StepGroup = inject(STEP_GROUP);

  get bodyLevel(): BodyLevel {
    return STEP_GROUP_SIZE_TO_BODY_LEVEL[this.parent.size];
  }

  get iconSize(): IconSize {
    return STEP_GROUP_SIZE_TO_ICON_SIZE[this.parent.size];
  }

  @HostListener('click')
  onSelectedChange(): void {
    this.selectedChange.emit();
  }
}
