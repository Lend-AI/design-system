import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { StepperModule } from './stepper.module';
import { StepperComponent } from './stepper.component';

const meta: Meta<StepperComponent> = {
  title: 'WIP/Stepper',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      imports: [StepperModule],
    }),
  ],
  argTypes: {
    selectedChange: { action: 'onSelectedChange' },
  },
};
export default meta;
type Story = StoryObj<StepperComponent>;

interface DummyItem {
  label: string;
  content: string;
}
const args: Partial<StepperComponent> & { data: DummyItem[] } = {
  data: [
    {
      label: 'First label',
      content: 'First content',
    },
    {
      label: 'Second label',
      content: 'Second content',
    },
    {
      label: 'Third label',
      content: 'Third content',
    },
  ],
};

export const Stepper: Story = {
  args,
  render: props => ({
    props,
    template: `
    <div style="display: flex; flex-direction: column;">
      <lai-stepper (selectedChange)="selectedChange($event)">
        <lai-step *ngFor="let item of data"
                 [label]="item.label">
          {{ item.content }}
        </lai-step>
      </lai-stepper>
    </div>
    `,
  }),
};
