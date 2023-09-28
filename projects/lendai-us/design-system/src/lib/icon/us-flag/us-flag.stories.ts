import { Meta, StoryObj } from '@storybook/angular';
import {
  US_FLAG_SIZES,
  US_FLAG_STATES,
  UsFlagComponent,
} from './us-flag.component';

const meta: Meta<UsFlagComponent> = {
  title: 'Atoms/Icon/UsFlag',
  component: UsFlagComponent,
  argTypes: {
    state: {
      options: US_FLAG_STATES,
      control: { type: 'select' },
    },
    size: {
      options: US_FLAG_SIZES,
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<UsFlagComponent>;

export const UsFlag: Story = {
  args: {
    state: 'GA',
    size: 'm',
  },
  render: (props) => ({
    props,
    template: `
      <lai-us-flag [state]="state" [size]="size"></lai-us-flag>
      `,
  }),
};
