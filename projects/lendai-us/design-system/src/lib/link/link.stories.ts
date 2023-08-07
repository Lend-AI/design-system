import { StoryFn, Meta } from '@storybook/angular';
import { LinkComponent } from './link.component';

export default {
  title: 'Atoms/Link',
  component: LinkComponent,
  argTypes: {
    type: {
      options: ['inline', 'standalone'],
      control: { type: 'select' },
    },
    level: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: StoryFn = args => ({
  props: args,
  template: `
  <a laiLink [type]="type" [level]="level" routerLink="/">
    {{content}}
  </a>
  `,
});
export const Link = Template.bind({});
Link.args = {
  content: 'Lorem ipsum',
  type: 'standalone',
  level: 'md',
};
