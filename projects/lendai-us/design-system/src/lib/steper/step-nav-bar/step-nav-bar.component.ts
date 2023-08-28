import { Component, HostBinding, Input } from '@angular/core';
import { StepSize } from '../shared';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'nav[laiStepNavBar]',
  templateUrl: './step-nav-bar.component.html',
  styleUrls: ['./step-nav-bar.component.scss'],
})
export class StepNavBarComponent {
  @Input()
  @HostBinding('attr.size')
  size: StepSize = 'md';
}
