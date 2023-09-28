import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { CleanLayoutComponent } from './clean-layout.component';
import { CleanLayoutModule } from './clean-layout.module';
import { BodyComponent } from '../../typography';
import {
  CLEAN_LAYOUT_SERVICE,
  CleanLayoutService,
} from './clean-layout.service';
import { of } from 'rxjs';

class DummyService implements CleanLayoutService {
  logoPath$ = of('/assets/images/logo/dark.svg');
}

const meta: Meta<CleanLayoutComponent> = {
  title: 'Templates/CleanLayout',
  parameters: {
    layout: 'fullscreen',
  },
  component: CleanLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [CleanLayoutModule, RouterTestingModule, BodyComponent],
      providers: [
        {
          provide: CLEAN_LAYOUT_SERVICE,
          useClass: DummyService,
        },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<CleanLayoutComponent>;

export const CleanLayout: Story = {
  args: {
    title: 'Your title',
    backgroundImage: 'auth-background.png',
  },
  render: (props) => ({
    props,
    template: `
    <lai-clean-layout>
      <lai-clean-layout-left [background]="backgroundImage" [title]="title">
        <lai-body level="sm" style="color: white">
          Your slogan goes here!
        </lai-body>
      </lai-clean-layout-left>
      <lai-clean-layout-right>
        Your content goes here!
      </lai-clean-layout-right>
    </lai-clean-layout>
  `,
  }),
};
