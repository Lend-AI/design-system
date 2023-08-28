import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
} from '@angular/core';
import { StepComponent } from '../step/step.component';
import { StepState } from '../step-label/step-label.component';

@Component({
  selector: 'lai-step-group',
  templateUrl: './step-group.component.html',
  styleUrls: ['./step-group.component.scss'],
})
export class StepGroupComponent implements AfterViewInit {
  @Output() selectedChange = new EventEmitter<number>();

  @ContentChildren(StepComponent) steps!: QueryList<StepComponent>;

  selectedStep?: StepComponent;
  activeIndex = 0;

  state(index: number): StepState {
    if (index > this.activeIndex) {
      return 'next';
    } else if (index < this.activeIndex) {
      return 'previous';
    }
    return 'current';
  }

  ngAfterViewInit(): void {
    if (!this.selectedStep && this.steps.first) {
      this.selectedStep = this.steps.first;
    }
  }

  onSelectedChange(index: number): void {
    this.activeIndex = index;
    this.selectedStep = this.steps.get(index);
    this.selectedChange.emit(index);
  }
}