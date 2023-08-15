import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IconGlyph } from '../../icon';

export interface SidenavLayoutCategory {
  icon: IconGlyph;
  title: string;
  route: string;
}

export interface SidenavLayoutService {
  logoPath$: Observable<string>;
  firstName$: Observable<string>;
  lastName$: Observable<string>;
  accountInfo$: Observable<string>;
  logOutText$: Observable<string>;
  sidenavCategories$: Observable<SidenavLayoutCategory[]>;
  accountCallBack(): Promise<void>;
  logoutCallBack(): Promise<void>;
}

export const SIDENAV_LAYOUT_SERVICE = new InjectionToken<SidenavLayoutService>(
  `_SIDENAV_LAYOUT_SERVICE`
);
