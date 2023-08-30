import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
} from '@angular/core';
import { StepComponent } from './stepper-step/step.component';

@Component({
  selector: 'lai-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements AfterViewInit {
  @Output() selectedChange = new EventEmitter<number>();

  @ContentChildren(StepComponent)
  protected steps!: QueryList<StepComponent>;

  protected selectedStep?: StepComponent;
  protected activeIndex = 0;

  constructor(private readonly cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (!this.selectedStep && this.steps.first) {
      this.selectedStep = this.steps.first;
      this.cdRef.detectChanges();
    }
  }

  onSelectedChange(index: number): void {
    this.activeIndex = index;
    this.selectedStep = this.steps.get(index);
    this.selectedChange.emit(index);
  }
}
