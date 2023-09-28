import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { HEADLINE_LEVELS, HeadlineComponent } from './headline.component';

const meta: Meta<HeadlineComponent> = {
  title: 'Atoms/Typography/Headline',
  decorators: [
    moduleMetadata({
      imports: [HeadlineComponent],
    }),
  ],
  argTypes: {
    level: {
      options: HEADLINE_LEVELS,
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<HeadlineComponent>;

export const Headline: Story = {
  args: {
    level: 1,
  },
  render: (props) => ({
    props: {
      ...props,
      content: 'Lorem ipsum',
    },
    template: `
      <lai-headline [level]="level">
        {{content}}
      </lai-headline>
    `,
  }),
};
