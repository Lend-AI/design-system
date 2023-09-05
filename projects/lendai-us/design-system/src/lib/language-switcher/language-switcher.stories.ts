import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { BehaviorSubject, of } from 'rxjs';
import {
  LANGUAGE_SWITCHER_SERVICE,
  LanguageSwitcherService,
} from './language-switcher.service';
import { LanguageSwitcherComponent } from './language-switcher.component';

class DummyService implements LanguageSwitcherService {
  _currentLanguage$ = new BehaviorSubject('il');
  options$ = of([
    {
      flag: 'il',
      label: 'Hebrew',
      value: 'he',
    },
    {
      flag: 'us',
      label: 'English',
      value: 'en',
    },
  ]);
  currentLanguage$ = this._currentLanguage$.asObservable();
  labelText$ = of('Languages');
  changeLanguageCallback(value: string): void {
    this._currentLanguage$.next(value);
  }
}

const meta: Meta<LanguageSwitcherComponent> = {
  title: 'Molecules/LanguageSwitcher',
  component: LanguageSwitcherComponent,
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: LANGUAGE_SWITCHER_SERVICE,
          useClass: DummyService,
        },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<LanguageSwitcherComponent>;

export const LanguageSwitcher: Story = {
  args: {},
  render: props => ({
    props,
  }),
};
