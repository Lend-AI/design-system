import { Component, HostBinding, Input, inject } from '@angular/core';
import { StepNavBarComponent } from '../step-nav-bar/step-nav-bar.component';
import { BodyLevel } from '../../typography';
import { STEP_GROUP_SIZE_TO_BODY_LEVEL } from '../shared';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[laiStepNavBarLink]',
  templateUrl: './step-nav-bar-link.component.html',
  styleUrls: ['./step-nav-bar-link.component.scss'],
})
export class StepNavBarLinkComponent {
  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  parent: StepNavBarComponent = inject(StepNavBarComponent);

  get bodyLevel(): BodyLevel {
    return STEP_GROUP_SIZE_TO_BODY_LEVEL[this.parent.size];
  }
}
