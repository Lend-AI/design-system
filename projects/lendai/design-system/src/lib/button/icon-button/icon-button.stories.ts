import { StoryFn, moduleMetadata, Meta } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../../icon';

export default {
  title: 'Atoms/Button/IconButton',
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, IconComponent],
    }),
  ],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    hierarchy: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'success'],
    },
  },
} as Meta;

const IconButtonTemplate: StoryFn = args => ({
  props: args,
  template: `
  <button laiIconButton
          [disabled]="disabled"
          [color]="color"
          [size]="size"
          [hierarchy]="hierarchy">
    <lai-icon [glyph]="glyph"></lai-icon>
  </button>
  `,
});
export const IconButton = IconButtonTemplate.bind({});
IconButton.args = {
  glyph: 'communication',
  disabled: false,
  hierarchy: 'primary',
  size: 'md',
  color: 'default',
};

const LabelWithPrefixTemplate: StoryFn = args => ({
  props: args,
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
});
export const LabelWithPrefix = LabelWithPrefixTemplate.bind({});
LabelWithPrefix.args = {
  glyph: 'communication',
  content: 'Label',
  disabled: false,
  hierarchy: 'primary',
  size: 'md',
  color: 'default',
};

const LabelWithSuffixTemplate: StoryFn = args => ({
  props: args,
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
});
export const LabelWithSuffix = LabelWithSuffixTemplate.bind({});
LabelWithSuffix.args = {
  content: 'Label',
  glyph: 'communication',
  disabled: false,
  hierarchy: 'primary',
  size: 'md',
  color: 'default',
};
