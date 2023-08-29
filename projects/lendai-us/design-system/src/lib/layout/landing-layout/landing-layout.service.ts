import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IconGlyph } from '../../icon';

export interface LandingLayoutCategory {
  icon: IconGlyph;
  title: string;
  route: string;
}

export interface LandingLayoutService {
  logoPath$: Observable<string>;
  landingLayoutCategories$: Observable<LandingLayoutCategory[]>;
}

export const LANDING_LAYOUT_SERVICE = new InjectionToken<LandingLayoutService>(
  `_LANDING_LAYOUT_SERVICE`
);
