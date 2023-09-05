import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface LanguageSwitcherService {
  options$: Observable<LanguageSwitcherOption[]>;
  currentLanguage$: Observable<string>;
  labelText$: Observable<string>;
  changeLanguageCallback: (value: string) => void;
}

export interface LanguageSwitcherOption {
  flag: string;
  label: string;
  value: string;
}

export const LANGUAGE_SWITCHER_SERVICE =
  new InjectionToken<LanguageSwitcherService>('_LANGUAGE_SWITCHER_SERVICE');
