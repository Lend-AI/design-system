import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { TITLE_LEVELS, TitleComponent } from './title.component';

const meta: Meta<TitleComponent> = {
  title: 'Atoms/Typography/Title',
  decorators: [
    moduleMetadata({
      imports: [TitleComponent],
    }),
  ],
  argTypes: {
    level: {
      options: TITLE_LEVELS,
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<TitleComponent>;

export const Title: Story = {
  args: {
    level: 1,
  },
  render: (props) => ({
    props: {
      ...props,
      content: 'Lorem ipsum',
    },
    template: `
      <lai-title [level]="level">
        {{content}}
      </lai-title>
    `,
  }),
};
