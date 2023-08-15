import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import {
  BADGE_COLORS,
  BADGE_RADIUSES,
  BADGE_TYPES,
  BadgeComponent,
} from './badge.component';

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
      options: BADGE_COLORS,
      control: { type: 'select' },
    },
    radius: {
      options: BADGE_RADIUSES,
      control: { type: 'select' },
    },
    type: {
      options: BADGE_TYPES,
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
