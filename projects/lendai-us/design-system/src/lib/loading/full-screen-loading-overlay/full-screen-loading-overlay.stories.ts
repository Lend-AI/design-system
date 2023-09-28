import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../../button';
import { Component, inject } from '@angular/core';
import { LoadingModule } from '../loading.module';
import { LoadingService } from '../loading.service';

@Component({
  standalone: true,
  template: `
    <button
      laiButton
      (click)="open()">
      Open
    </button>
  `,
  styles: [],
  imports: [ButtonComponent, LoadingModule],
})
class ParentComponent {
  loading = inject(LoadingService);
  open(): void {
    this.loading.open();
    setTimeout(() => this.loading.close(), 3000);
  }
}

const meta: Meta<ParentComponent> = {
  title: 'WIP/Loading/FullScreenLoadingOverlay',
  component: ParentComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
};
export default meta;
type Story = StoryObj<ParentComponent>;

export const FullScreenLoadingOverlay: Story = {
  args: {},
  render: (props) => ({
    props,
  }),
};
