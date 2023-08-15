import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  LANDING_PAGE_SERVICE,
  LandingPageCategory,
  LandingPageService,
} from './landing-page-layout-service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from '../../button';
import { LandingPageLayoutModule } from './landing-page-layout.module';
import { LandingPageLayoutComponent } from './landing-page-layout.component';

const landingPageItems: LandingPageCategory[] = [
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
class DummyService implements LandingPageService {
  logoPath$ = of('/assets/images/logo/light.svg');
  logOutText$ = of('Log Out');
  landingPageCategories$ = of(landingPageItems);
  async accountCallBack(): Promise<void> {
    console.log('account call back');
  }
  async logoutCallBack(): Promise<void> {
    console.log('logout call back');
  }
}

const meta: Meta<LandingPageLayoutComponent> = {
  title: 'Templates/LandingPageLayout',
  parameters: {
    layout: 'fullscreen',
  },
  component: LandingPageLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [LandingPageLayoutModule, ButtonComponent, RouterTestingModule],
      providers: [
        {
          provide: LANDING_PAGE_SERVICE,
          useClass: DummyService,
        },
      ],
    }),
  ],
};
export default meta;

type Story = StoryObj<LandingPageLayoutComponent>;

export const LandingPageLayout: Story = {
  render: props => ({
    props,
    template: `
    <lai-landing-page-layout [logoPath]="logoPath">
      <lai-landing-page-layout-actions>
        <button laiButton>
          "Lang-switcher"
        </button>
        <button laiButton class="apply">
          Apply Now
        </button>
      </lai-landing-page-layout-actions>
      <lai-landing-page-layout-content>
        <div style="height: 500px;">Some content</div>
      </lai-landing-page-layout-content>
    </lai-landing-page-layout>
  `,
  }),
};
