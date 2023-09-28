import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  LANDING_LAYOUT_SERVICE,
  LandingLayoutCategory,
  LandingLayoutService,
} from './landing-layout.service';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from '../../button';
import { LandingLayoutModule } from './landing-layout.module';
import { LandingLayoutComponent } from './landing-layout.component';

class DummyService implements LandingLayoutService {
  logoPath$ = of('assets/images/logo/light.svg');
  landingLayoutCategories$: Observable<LandingLayoutCategory[]> = of([
    {
      icon: 'briefcase',
      fragment: 'loan-programs',
      title: 'Loan Programs',
    },
    {
      icon: 'wallet',
      fragment: 'why',
      title: 'Why Finance?',
    },
    {
      icon: 'help',
      fragment: 'how',
      title: 'How Does It Works?',
    },
  ]);
}

const meta: Meta<LandingLayoutComponent> = {
  title: 'Templates/LandingLayout',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      imports: [LandingLayoutModule, ButtonComponent, RouterTestingModule],
      providers: [
        {
          provide: LANDING_LAYOUT_SERVICE,
          useClass: DummyService,
        },
      ],
    }),
  ],
};
export default meta;

type Story = StoryObj<LandingLayoutComponent>;

export const LandingLayout: Story = {
  render: (props) => ({
    props,
    template: `
      <lai-landing-layout>
        <lai-landing-layout-actions>
          <button laiButton>
            "Lang-switcher"
          </button>
          <button laiButton class="apply">
            Apply Now
          </button>
        </lai-landing-layout-actions>
        <lai-landing-layout-content>
          Some content
        </lai-landing-layout-content>
      </lai-landing-layout>
  `,
  }),
};
