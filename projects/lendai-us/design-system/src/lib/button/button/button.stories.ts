import { StoryFn, moduleMetadata, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Atoms/Button/Button',
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
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

const ButtonTemplate: StoryFn = args => ({
  props: args,
  template: `
  <button laiButton
          [disabled]="disabled"
          [color]="color"
          [size]="size"
          [hierarchy]="hierarchy">
    {{content}}
  </button>
  `,
});
export const Button = ButtonTemplate.bind({});
Button.args = {
  content: 'Label',
  disabled: false,
  hierarchy: 'primary',
  size: 'md',
  color: 'default',
};
