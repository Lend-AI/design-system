import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { BADGE_COLORS, BADGE_SIZES, BadgeComponent } from './badge.component';
import { IconComponent } from '../icon';

const meta: Meta<BadgeComponent> = {
  title: 'Atoms/Badge',
  decorators: [
    moduleMetadata({
      imports: [BadgeComponent, IconComponent],
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
    size: {
      options: BADGE_SIZES,
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<BadgeComponent>;

const args: Partial<BadgeComponent> = {
  color: 'blue',
  size: 'md',
};

export const Badge: Story = {
  args,
  render: props => ({
    props: {
      ...props,
      content: 'Lorem ipsum',
    },
    template: `
      <lai-badge [color]="color"
                 [size]="size">
        {{content}}
      </lai-badge>
  `,
  }),
};

export const BadgeWithPrefix: Story = {
  args,
  render: props => ({
    props: {
      ...props,
      content: 'Lorem ipsum',
      glyph: 'communication',
    },
    template: `
      <lai-badge [color]="color"
                 [size]="size">
        <lai-icon [glyph]="glyph"></lai-icon>
        {{content}}
      </lai-badge>
  `,
  }),
};

export const BadgeWithSuffix: Story = {
  args,
  render: props => ({
    props: {
      ...props,
      content: 'Lorem ipsum',
      glyph: 'communication',
    },
    template: `
      <lai-badge [color]="color"
                 [size]="size">
        {{content}}
        <lai-icon [glyph]="glyph"></lai-icon>
      </lai-badge>
  `,
  }),
};
