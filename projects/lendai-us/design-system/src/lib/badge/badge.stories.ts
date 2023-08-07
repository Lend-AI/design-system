import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'WIP/Badge',
  decorators: [
    moduleMetadata({
      imports: [BadgeComponent],
    }),
  ],
  render: args => ({
    props: {
      ...args,
      content: 'Lorem ipsum',
    },
    template: `
      <lai-badge [color]="color" [radius]="radius" [type]="type">
        {{content}}
      </lai-badge>
    `,
  }),
  argTypes: {
    color: {
      options: ['blue', 'purple', 'aqua', 'gray', 'orange', 'pink', 'red'],
      control: { type: 'select' },
    },
    radius: {
      options: ['xs', 'sm'],
      control: { type: 'select' },
    },
    type: {
      options: ['transparent', 'solid'],
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<BadgeComponent>;

export const Badge: Story = {
  args: {
    radius: 'xs',
    color: 'blue',
    type: 'transparent',
  },
};
