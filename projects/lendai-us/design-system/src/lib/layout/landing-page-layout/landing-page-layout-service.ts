import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface LandingPageCategory {
  title: string;
  route: string;
}

export interface LandingPageService {
  logoPath$: Observable<string>;
  logOutText$: Observable<string>;
  landingPageCategories$: Observable<LandingPageCategory[]>;
  accountCallBack(): Promise<void>;
  logoutCallBack(): Promise<void>;
}

export const LANDING_PAGE_SERVICE = new InjectionToken<LandingPageService>(
  `_LANDING_PAGE_SERVICE`
);
