import { Meta, componentWrapperDecorator, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'WIP/Card',
  component: CardComponent,
  decorators: [
    componentWrapperDecorator(story => {
      return `<style>
          lai-card {
            width: 100px;
            height: 100px;
          }
        </style>
        ${story}`;
    }),
  ],
  argTypes: {
    radius: {
      options: ['sm', 'md'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<CardComponent>;

const args: Partial<CardComponent> = {
  radius: 'sm',
  size: 'md',
};

export const Card: Story = {
  args,
  render: props => ({
    props,
  }),
};
