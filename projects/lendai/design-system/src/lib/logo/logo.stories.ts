import { StoryFn, Meta } from '@storybook/angular';
import { LogoComponent } from './logo.component';

export default {
  title: 'WIP/Logo',
  component: LogoComponent,
  argTypes: {
    style: {
      options: ['dark', 'light'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: StoryFn = args => ({
  props: args,
});
export const Logo = Template.bind({});
Logo.args = {
  style: 'light',
};
