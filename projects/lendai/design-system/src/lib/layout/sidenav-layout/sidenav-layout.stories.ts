import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SidenavLayoutModule } from './sidenav-layout.module';
import {
  SIDENAV_SERVICE,
  SidenavCategory,
  SidenavService,
} from './sidenav-layout-service';
import { SidenavLayoutComponent } from './sidenav-layout.component';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from '../../button';

const sidenavItems: SidenavCategory[] = [
  {
    icon: 'dashboard',
    route: '/dashboard',
    title: 'Dashboard',
  },
  {
    icon: 'loan-applications',
    route: '/loan-applications',
    title: 'Loan Applications',
  },
  {
    icon: 'loan-policy',
    route: '/loan-policy',
    title: 'Loan Policy',
  },
];
class DummyService implements SidenavService {
  firstName$ = of('nof');
  lastName$ = of('sh');
  accountInfo$ = of('View profile');
  logOutText$ = of('Log Out');
  sidenavCategories$ = of(sidenavItems);
  async accountCallBack(): Promise<void> {
    console.log('account call back');
  }
  async logoutCallBack(): Promise<void> {
    console.log('logout call back');
  }
}

const meta: Meta<SidenavLayoutComponent> = {
  title: 'WIP/Layout',
  parameters: {
    layout: 'fullscreen',
  },
  component: SidenavLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [SidenavLayoutModule, ButtonComponent, RouterTestingModule],
      providers: [
        {
          provide: SIDENAV_SERVICE,
          useClass: DummyService,
        },
      ],
    }),
  ],
};
export default meta;

type Story = StoryObj<SidenavLayoutComponent>;

export const SidenavLayout: Story = {
  render: props => ({
    props,
    template: `
    <lai-sidenav-layout>
      <lai-sidenav-layout-avatar initials="NS"></lai-sidenav-layout-avatar>
      <lai-sidenav-layout-title>Header Title</lai-sidenav-layout-title>
      <lai-sidenav-layout-subtitle>Header Subtitle</lai-sidenav-layout-subtitle>
      <lai-sidenav-layout-actions>
        <button laiButton>
          New Application
        </button>
      </lai-sidenav-layout-actions>
      <lai-sidenav-layout-content>
        <div style="height: 500px;">Some content</div>
      </lai-sidenav-layout-content>
    </lai-sidenav-layout>
  `,
  }),
};
