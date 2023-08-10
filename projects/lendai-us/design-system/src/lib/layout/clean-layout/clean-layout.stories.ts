import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { CleanLayoutComponent } from './clean-layout.component';
import { CleanLayoutModule } from './clean-layout.module';
import { BodyComponent } from '../../typography';

const meta: Meta<CleanLayoutComponent> = {
  title: 'Templates/CleanLayout',
  parameters: {
    layout: 'fullscreen',
  },
  component: CleanLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [CleanLayoutModule, RouterTestingModule, BodyComponent],
    }),
  ],
};
export default meta;
type Story = StoryObj<CleanLayoutComponent>;

export const CleanLayout: Story = {
  args: {
    title: 'Your title',
    backgroundImage: 'auth-background.png',
    logoPath: '/assets/images/logo/dark.svg',
  },
  render: props => ({
    props,
    template: `
    <lai-clean-layout>
      <lai-clean-layout-left [logoPath]="logoPath" [background]="backgroundImage" [title]="title">
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
