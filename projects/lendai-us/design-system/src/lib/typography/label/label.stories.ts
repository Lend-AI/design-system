import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { LABEL_LEVELS, LABEL_WEIGHTS, LabelComponent } from './label.component';

const meta: Meta<LabelComponent> = {
  title: 'Atoms/Typography/Label',
  decorators: [
    moduleMetadata({
      imports: [LabelComponent],
    }),
  ],
  argTypes: {
    level: {
      options: LABEL_LEVELS,
      control: { type: 'select' },
    },
    weight: {
      options: LABEL_WEIGHTS,
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<LabelComponent>;

export const Label: Story = {
  args: {
    level: 'md',
    weight: 'regular',
    underline: false,
  },
  render: (props) => ({
    props: {
      ...props,
      content: 'Lorem ipsum',
    },
    template: `
      <lai-label [level]="level"
                 [weight]="weight"
                 [underline]="underline">
        {{content}}
      </lai-label>
    `,
  }),
};
