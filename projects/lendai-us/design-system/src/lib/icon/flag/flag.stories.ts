import { Meta, StoryFn } from '@storybook/angular';
import { FlagComponent } from './flag.component';

export default {
  title: 'Atoms/Icon/Flag',
  component: FlagComponent,
  argTypes: {
    size: {
      options: ['xs', 's', 'm', 'l', 'xl'],
      control: { type: 'select' },
    },
    type: {
      options: ['rectangle', 'circle'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
});
export const Flag = Template.bind({});
Flag.args = {
  country: 'IL',
  size: 'm',
  type: 'rectangle',
};
