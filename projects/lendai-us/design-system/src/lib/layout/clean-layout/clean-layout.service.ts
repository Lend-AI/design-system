import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface CleanLayoutService {
  logoPath$: Observable<string>;
}

export const CLEAN_LAYOUT_SERVICE = new InjectionToken<CleanLayoutService>(
  `_CLEAN_LAYOUT_SERVICE`,
);
