import { Meta, StoryFn } from '@storybook/angular';
import { ICON_GLYPHS, ICON_SIZES, IconComponent } from './icon.component';

export default {
  title: 'Atoms/Icon/Icon',
  component: IconComponent,
  argTypes: {
    glyph: {
      options: ICON_GLYPHS,
      control: { type: 'select' },
    },
    size: {
      options: ICON_SIZES,
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: StoryFn = (args) => ({
  props: args,
});

export const Icon = Template.bind({});
Icon.args = {
  glyph: 'external-link',
  size: 'md',
};
