import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {
  BUTTON_COLORS,
  BUTTON_HIERARCHIES,
  BUTTON_SIZES,
  ButtonComponent,
} from './button.component';
import { IconComponent } from '../icon';

const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, IconComponent],
    }),
  ],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: BUTTON_SIZES,
    },
    hierarchy: {
      control: { type: 'select' },
      options: BUTTON_HIERARCHIES,
    },
    color: {
      control: { type: 'select' },
      options: BUTTON_COLORS,
    },
  },
};
export default meta;
type Story = StoryObj<ButtonComponent>;

const args = {
  hierarchy: 'primary',
  size: 'md',
  color: 'primary',
  disabled: false,
} as Partial<ButtonComponent>;

export const Button: Story = {
  args,
  render: props => ({
    props: {
      ...props,
      content: 'Lorem ipsum',
    },
    template: `
      <button laiButton
              [disabled]="disabled"
              [color]="color"
              [size]="size"
              [hierarchy]="hierarchy">
        {{content}}
      </button>
  `,
  }),
};

export const IconButton: Story = {
  args,
  render: props => ({
    props: {
      ...props,
      glyph: 'communication',
    },
    template: `
      <button laiIconButton
              [disabled]="disabled"
              [color]="color"
              [size]="size"
              [hierarchy]="hierarchy">
        <lai-icon [glyph]="glyph"></lai-icon>
      </button>
  `,
  }),
};

export const ButtonWithPrefix: Story = {
  args,
  render: props => ({
    props: {
      ...props,
      content: 'Lorem ipsum',
      glyph: 'communication',
    },
    template: `
      <button laiButton
              [disabled]="disabled"
              [color]="color"
              [size]="size"
              [hierarchy]="hierarchy">
        <lai-icon [glyph]="glyph"></lai-icon>
        {{content}}
      </button>
  `,
  }),
};

export const ButtonWithSuffix: Story = {
  args,
  render: props => ({
    props: {
      ...props,
      content: 'Lorem ipsum',
      glyph: 'communication',
    },
    template: `
      <button laiButton
              [disabled]="disabled"
              [color]="color"
              [size]="size"
              [hierarchy]="hierarchy">
        {{content}}
        <lai-icon [glyph]="glyph"></lai-icon>
      </button>
  `,
  }),
};
