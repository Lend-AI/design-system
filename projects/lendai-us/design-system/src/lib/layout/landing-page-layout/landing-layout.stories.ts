import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  LANDING_LAYOUT_SERVICE,
  LandingLayoutCategory,
  LandingLayoutService,
} from './landing-layout.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from '../../button';
import { LandingLayoutModule } from './landing-layout.module';
import { LandingLayoutComponent } from './landing-layout.component';

const landingPageItems: LandingLayoutCategory[] = [
  {
    icon: 'briefcase',
    route: '/#loan-programs',
    title: 'Loan Programs',
  },
  {
    icon: 'wallet',
    route: '/#why',
    title: 'Why Finance?',
  },
  {
    icon: 'help',
    route: '/#how',
    title: 'How Does It Works?',
  },
];
class DummyService implements LandingLayoutService {
  logoPath$ = of('/assets/images/logo/light.svg');
  logOutText$ = of('Log Out');
  landingLayoutCategories$ = of(landingPageItems);
  async accountCallBack(): Promise<void> {
    console.log('account call back');
  }
  async logoutCallBack(): Promise<void> {
    console.log('logout call back');
  }
}

const meta: Meta<LandingLayoutComponent> = {
  title: 'Templates/LandingLayout',
  parameters: {
    layout: 'fullscreen',
  },
  component: LandingLayoutComponent,
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
  render: props => ({
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
        <div style="height: 500px;">Some content</div>
      </lai-landing-layout-content>
    </lai-landing-layout>
  `,
  }),
};
