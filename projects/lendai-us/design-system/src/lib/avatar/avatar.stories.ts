import { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

const meta: Meta<AvatarComponent> = {
  title: 'Atoms/Avatar',
  component: AvatarComponent,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<AvatarComponent>;

const args: Partial<AvatarComponent> = {
  size: 'md',
  initials: 'MD',
};

export const Avatar: Story = {
  args,
  render: props => ({
    props,
  }),
};
