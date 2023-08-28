import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { SteperModule } from './steper.module';
import { StepGroupComponent } from './step-group/step-group.component';

const meta: Meta<StepGroupComponent> = {
  title: 'WIP/Steper',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    moduleMetadata({
      imports: [SteperModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['md'],
      control: { type: 'select' },
    },
    type: {
      options: ['line', 'contained'],
      control: { type: 'select' },
    },
    selectedChange: { action: 'onSelectedChange' },
  },
};
export default meta;
type Story = StoryObj<StepGroupComponent>;

interface DummyItem {
  label: string;
  content: string;
}
const args: Partial<StepGroupComponent> & { data: DummyItem[] } = {
  size: 'md',
  type: 'line',
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

export const Text: Story = {
  args,
  render: props => ({
    props,
    template: `
      <lai-step-group [size]="size"
                     [type]="type"
                     (selectedChange)="selectedChange($event)">
        <lai-step *ngFor="let item of data"
                 [label]="item.label">
          {{ item.content }}
        </lai-step>
      </lai-step-group>
    `,
  }),
};
