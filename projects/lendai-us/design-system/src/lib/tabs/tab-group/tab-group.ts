import { InjectionToken } from '@angular/core';
import { TabSize } from '../shared';

export interface TabGroup {
  readonly size: TabSize;
}

export const TAB_GROUP = new InjectionToken<TabGroup>('_TAB_GROUP');
