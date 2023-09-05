import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { of } from 'rxjs';
import {
  LANGUAGE_SWITCHER_SERVICE,
  LanguageSwitcherService,
} from './language-switcher.service';
import { LanguageSwitcherComponent } from './language-switcher.component';

class DummyService implements LanguageSwitcherService {
  options$ = of([
    {
      flag: 'il',
      label: 'Hebrew',
      value: 'il',
    },
    {
      flag: 'us',
      label: 'English',
      value: 'us',
    },
  ]);
  currentLanguage$ = of('il');
  labelText$ = of('Languages');
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
