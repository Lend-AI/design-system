import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { DISPLAY_LEVELS, DisplayComponent } from './display.component';

const meta: Meta<DisplayComponent> = {
  title: 'Atoms/Typography/Display',
  decorators: [
    moduleMetadata({
      imports: [DisplayComponent],
    }),
  ],
  argTypes: {
    level: {
      options: DISPLAY_LEVELS,
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<DisplayComponent>;

export const Display: Story = {
  args: {
    level: 1,
  },
  render: props => ({
    props: {
      ...props,
      content: 'Lorem ipsum',
    },
    template: `
      <lai-display [level]="level">
        {{content}}
      </lai-display>
    `,
  }),
};
