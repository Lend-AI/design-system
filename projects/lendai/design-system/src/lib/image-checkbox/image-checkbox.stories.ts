import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { ImageCheckboxModule } from './image-checkbox.module';
import { ImageCheckboxGroupComponent } from './image-checkbox-group/image-checkbox-group.component';

const meta: Meta<ImageCheckboxGroupComponent<string>> = {
  title: 'WIP/ImageCheckbox',
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
    image: 'https://placehold.co/600x400',
    activeImage: 'https://placehold.co/900x600',
    value: 'first',
  },
  {
    label: 'Second label',
    image: 'https://placehold.co/600x400',
    activeImage: 'https://placehold.co/900x600',
    value: 'second',
  },
  {
    label: 'Third label',
    image: 'https://placehold.co/600x400',
    activeImage: 'https://placehold.co/900x600',
    value: 'third',
  },
];

export const ImageCheckbox: Story = {
  args: {},
  render: args => ({
    props: {
      ...args,
      data,
    },
    template: `
      <lai-image-checkbox-group>
        <lai-image-checkbox *ngFor="let item of data"
                            [label]="item.label"
                            [image]="item.image"
                            [activeImage]="item.activeImage"
                            [value]="item.value"></lai-image-checkbox>
      </lai-image-checkbox-group>
    `,
  }),
};
