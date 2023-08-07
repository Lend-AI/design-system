import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TabsModule } from './tabs.module';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { IconGlyph } from '../icon';

const meta: Meta<TabGroupComponent> = {
  title: 'Molecules/Tabs/TabGroup',
  decorators: [
    moduleMetadata({
      imports: [TabsModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['md', 'lg'],
      control: { type: 'select' },
    },
    type: {
      options: ['line', 'contained'],
      control: { type: 'select' },
    },
    selectedChange: { action: 'onSelectedChange' },
    remove: { action: 'onRemove' },
  },
};
export default meta;
type Story = StoryObj<TabGroupComponent>;

interface DummyItem {
  label: string;
  content: string;
  iconGlyph: IconGlyph;
}
const args: Partial<TabGroupComponent> & { data: DummyItem[] } = {
  size: 'md',
  type: 'line',
  data: [
    {
      label: 'First label',
      content: 'First content',
      iconGlyph: 'dashboard',
    },
    {
      label: 'Second label',
      content: 'Second content',
      iconGlyph: 'loan-applications',
    },
    {
      label: 'Third label',
      content: 'Third content',
      iconGlyph: 'loan-policy',
    },
  ],
};

export const Text: Story = {
  args,
  render: props => ({
    props,
    template: `
      <lai-tab-group [size]="size"
                     [type]="type"
                     (selectedChange)="selectedChange($event)">
        <lai-tab *ngFor="let item of data"
                 [label]="item.label">
          {{ item.content }}
        </lai-tab>
      </lai-tab-group>
    `,
  }),
};

export const TextWithIcons: Story = {
  args,
  render: props => ({
    props,
    template: `
      <lai-tab-group [size]="size"
                     [type]="type"
                     (selectedChange)="selectedChange($event)">
        <lai-tab *ngFor="let item of data"
                 [label]="item.label"
                 [iconGlyph]="item.iconGlyph">
          {{ item.content }}
        </lai-tab>
      </lai-tab-group>
    `,
  }),
};

export const Removable: Story = {
  args,
  render: props => ({
    props,
    template: `
      <lai-tab-group [size]="size"
                     [type]="type"
                     (selectedChange)="selectedChange($event)"
                     (remove)="remove($event)">
        <lai-tab *ngFor="let item of data; let last = last"
                 [label]="item.label"
                 [removable]="last">
          {{ item.content }}
        </lai-tab>
      </lai-tab-group>
    `,
  }),
};

export const Disabled: Story = {
  args,
  render: props => ({
    props,
    template: `
      <lai-tab-group [size]="size"
                     [type]="type"
                     (selectedChange)="selectedChange($event)">
        <lai-tab *ngFor="let item of data; let last = last"
                 [label]="item.label"
                 [disabled]="last">
          {{ item.content }}
        </lai-tab>
      </lai-tab-group>
    `,
  }),
};
