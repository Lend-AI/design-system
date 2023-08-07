import { StoryFn, moduleMetadata, Meta } from '@storybook/angular';
import { OverlineComponent } from './overline.component';

export default {
  title: 'Atoms/Typography/Overline',
  decorators: [
    moduleMetadata({
      imports: [OverlineComponent],
    }),
  ],
  argTypes: {
    level: {
      options: ['lg', 'sm'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: StoryFn = args => ({
  props: args,
  template: `
  <lai-overline [level]="level">
    {{content}}
  </lai-overline>
  `,
});

export const Overline = Template.bind({});
Overline.args = {
  content: 'Lorem ipsum',
  level: 'sm',
};
