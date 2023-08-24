import { InjectionToken } from '@angular/core';
import { StepSize } from '../shared';

export interface StepGroup {
  readonly size: StepSize;
}

export const STEP_GROUP = new InjectionToken<StepGroup>('_STEP_GROUP');
