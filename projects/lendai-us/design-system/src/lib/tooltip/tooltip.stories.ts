import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TooltipModule } from './tooltip.module';
import { TooltipDirective } from './tooltip.directive';
import { TOOLTIP_STYLES } from './tooltip.models';

const meta: Meta<TooltipDirective> = {
  title: 'Atoms/Tooltip',
  decorators: [
    moduleMetadata({
      imports: [TooltipModule],
    }),
  ],
  argTypes: {
    style: {
      options: TOOLTIP_STYLES,
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<TooltipDirective>;

export const Tooltip: Story = {
  args: {
    style: 'dark',
  },
  render: (props) => ({
    props,
    template: `
    <div laiTooltip="Hello World!"
         [style]="style">Lorem Ipsum</div>
    `,
  }),
};
