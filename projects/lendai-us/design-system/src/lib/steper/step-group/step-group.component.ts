import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { StepComponent } from '../step/step.component';
import { StepSize, StepType } from '../shared';
import { STEP_GROUP, StepGroup } from './step-group';

@Component({
  selector: 'lai-step-group',
  templateUrl: './step-group.component.html',
  styleUrls: ['./step-group.component.scss'],
  providers: [{ provide: STEP_GROUP, useExisting: StepGroupComponent }],
})
export class StepGroupComponent implements AfterViewInit, StepGroup {
  @Input()
  @HostBinding('attr.size')
  size: StepSize = 'md';

  @Input()
  @HostBinding('attr.type')
  type: StepType = 'line';

  @Output() selectedChange = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  @ContentChildren(StepComponent) steps!: QueryList<StepComponent>;

  selectedStep?: StepComponent;

  ngAfterViewInit(): void {
    if (!this.selectedStep && this.steps.first) {
      this.selectedStep = this.steps.first;
    }
  }

  onSelectedChange(index: number): void {
    this.selectedStep = this.steps.get(index);
    this.selectedChange.emit(index);
  }

  onRemove(index: number): void {
    this.remove.emit(index);
  }
}
