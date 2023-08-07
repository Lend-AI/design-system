import { StoryFn, moduleMetadata, Meta } from '@storybook/angular';
import { CaptionComponent } from './caption.component';

export default {
  title: 'Atoms/Typography/Caption',
  decorators: [
    moduleMetadata({
      imports: [CaptionComponent],
    }),
  ],
  argTypes: {
    level: {
      options: ['lg', 'md', 'sm'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: StoryFn = args => ({
  props: args,
  template: `
  <lai-caption [level]="level">
    {{content}}
  </lai-caption>
  `,
});

export const Caption = Template.bind({});
Caption.args = {
  content: 'Lorem ipsum',
  level: 'md',
};
