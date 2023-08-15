import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IconGlyph } from '../../icon';

export interface SidenavCategory {
  icon: IconGlyph;
  title: string;
  route: string;
}

export interface SidenavLayoutService {
  firstName$: Observable<string>;
  lastName$: Observable<string>;
  accountInfo$: Observable<string>;
  logOutText$: Observable<string>;
  sidenavCategories$: Observable<SidenavCategory[]>;
  accountCallBack(): Promise<void>;
  logoutCallBack(): Promise<void>;
}

export const SIDENAV_LAYOUT_SERVICE = new InjectionToken<SidenavLayoutService>(
  `_SIDENAV_LAYOUT_SERVICE`
);
