import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ImageCheckboxModule } from './image-checkbox.module';
import { ImageCheckboxGroupComponent } from './image-checkbox-group/image-checkbox-group.component';

const meta: Meta<ImageCheckboxGroupComponent<string>> = {
  title: 'WIP/ImageCheckbox',
  component: ImageCheckboxGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [ImageCheckboxModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<ImageCheckboxGroupComponent<string>>;

const data = [
  {
    label: 'First label',
    image: 'assets/images/image-checkbox/CASH_OUT_REFINANCE.svg',
    activeImage: 'assets/images/image-checkbox/CASH_OUT_REFINANCE--active.svg',
    value: 'first',
  },
  {
    label: 'Second label',
    image: 'assets/images/image-checkbox/NEW_PURCHASE.svg',
    activeImage: 'assets/images/image-checkbox/NEW_PURCHASE--active.svg',
    value: 'second',
  },
  {
    label: 'Third label',
    image: 'assets/images/image-checkbox/PRE_APPROVAL.svg',
    activeImage: 'assets/images/image-checkbox/PRE_APPROVAL--active.svg',
    value: 'third',
  },
];

export const ImageCheckbox: Story = {
  args: {
    hideCheckboxes: false,
  },
  render: args => ({
    props: {
      ...args,
      data,
    },
    template: `
      <lai-image-checkbox-group [hideCheckboxes]="hideCheckboxes">
        <lai-image-checkbox *ngFor="let item of data"
                            [label]="item.label"
                            [image]="item.image"
                            [activeImage]="item.activeImage"
                            [value]="item.value"></lai-image-checkbox>
      </lai-image-checkbox-group>
    `,
  }),
};
