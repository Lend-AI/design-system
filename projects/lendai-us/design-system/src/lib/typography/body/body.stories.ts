import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { BODY_LEVELS, BODY_WEIGHTS, BodyComponent } from './body.component';

const meta: Meta<BodyComponent> = {
  title: 'Atoms/Typography/Body',
  decorators: [
    moduleMetadata({
      imports: [BodyComponent],
    }),
  ],
  argTypes: {
    level: {
      options: BODY_LEVELS,
      control: { type: 'select' },
    },
    weight: {
      options: BODY_WEIGHTS,
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<BodyComponent>;

export const Body: Story = {
  args: {
    level: 4,
    weight: 'regular',
  },
  render: (props) => ({
    props: {
      ...props,
      content: 'Lorem ipsum',
    },
    template: `
      <lai-body [level]="level"
                [weight]="weight">
        {{content}}
      </lai-body>
    `,
  }),
};
