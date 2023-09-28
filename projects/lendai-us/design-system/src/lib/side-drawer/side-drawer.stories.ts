import { Component, inject } from '@angular/core';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../button';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { SideDrawerModule } from './side-drawer.module';

@Component({
  standalone: true,
  template: `
    <lai-side-drawer>
      <lai-side-drawer-header>
        header of the side drawer goes here!
      </lai-side-drawer-header>
      content of the side drawer goes here!
    </lai-side-drawer>
  `,
  styles: [],
  imports: [SideDrawerModule],
})
class ChildComponent {}

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
  imports: [ButtonComponent, DialogModule],
})
class ParentComponent {
  dialog = inject(Dialog);
  open(): void {
    this.dialog.open(ChildComponent);
  }
}

const meta: Meta<ParentComponent> = {
  title: 'WIP/SideDrawer',
  component: ParentComponent,
  decorators: [
    moduleMetadata({
      imports: [ChildComponent],
    }),
  ],
};
export default meta;
type Story = StoryObj<ParentComponent>;

export const SideDrawer: Story = {
  args: {},
  render: (props) => ({
    props,
  }),
};
