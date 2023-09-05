import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LANGUAGE_SWITCHER_SERVICE,
  LanguageSwitcherOption,
  LanguageSwitcherService,
} from './language-switcher.service';
import { Observable, Subscription, merge, tap } from 'rxjs';
import { FlagComponent, IconComponent } from '../icon';
import { ButtonComponent } from '../button';
import { OverlayModule } from '@angular/cdk/overlay';
import { CardComponent } from '../card';
import { LabelComponent } from '../typography';

@Component({
  selector: 'lai-language-switcher',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    FlagComponent,
    ButtonComponent,
    OverlayModule,
    CardComponent,
    LabelComponent,
  ],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss'],
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
  protected currentOption?: LanguageSwitcherOption;
  protected options: LanguageSwitcherOption[] = [];
  protected currentLanguage?: string;
  protected isOpen = false;

  private readonly sub$ = new Subscription();

  constructor(
    @Inject(LANGUAGE_SWITCHER_SERVICE)
    private readonly service: LanguageSwitcherService
  ) {}

  protected get labelText$(): Observable<string> {
    return this.service.labelText$;
  }

  ngOnInit(): void {
    this.sub$.add(
      merge(
        this.service.currentLanguage$.pipe(
          tap(currentLanguage => (this.currentLanguage = currentLanguage))
        ),
        this.service.options$.pipe(tap(options => (this.options = options)))
      ).subscribe(() => {
        console.log(this.currentLanguage, this.options);
        this.currentOption = this.options.find(
          ({ value }) => value === this.currentLanguage
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  changeLanguage(option: LanguageSwitcherOption): void {
    this.service.changeLanguageCallback(option.value);
    this.isOpen = false;
  }
}
