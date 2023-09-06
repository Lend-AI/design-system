import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LoadingSpinnerComponent } from './loading-spinner.component';
import { ButtonComponent } from '../../button';

const meta: Meta<LoadingSpinnerComponent> = {
  title: 'WIP/Loading/LoadingSpinner',
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  component: LoadingSpinnerComponent,
};
export default meta;
type Story = StoryObj<LoadingSpinnerComponent>;

export const LoadingSpinner: Story = {
  args: {},
  render: props => ({
    props,
  }),
};

export const Button: Story = {
  args: {},
  render: props => ({
    props,
    template: `
    <button laiButton disabled>
      <lai-loading-spinner></lai-loading-spinner>
      Loading
    </button>
    `,
  }),
};
