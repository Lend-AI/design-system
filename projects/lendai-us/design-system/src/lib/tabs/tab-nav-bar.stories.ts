import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { TabsModule } from './tabs.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { TabNavBarComponent } from './tab-nav-bar/tab-nav-bar.component';
import { IconGlyph } from '../icon';

@Component({
  selector: 'lai-routed-component',
  standalone: true,
  template: '<p>routed component works!</p>',
  styleUrls: [],
})
export class RoutedComponent {}

const meta: Meta<TabNavBarComponent> = {
  title: 'Molecules/Tabs/TabNavBar',
  decorators: [
    moduleMetadata({
      imports: [
        RoutedComponent,
        TabsModule,
        RouterTestingModule.withRoutes([
          { path: 'first-route', component: RoutedComponent },
          { path: 'second-route', component: RoutedComponent },
          { path: 'third-route', component: RoutedComponent },
        ]),
      ],
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
  },
};
export default meta;
type Story = StoryObj<TabNavBarComponent>;

interface DummyItem {
  link: string;
  content: string;
  iconGlyph: IconGlyph;
}
const args: Partial<TabNavBarComponent> & { data: DummyItem[] } = {
  size: 'md',
  type: 'line',
  data: [
    {
      link: '/first-route',
      content: 'First content',
      iconGlyph: 'dashboard',
    },
    {
      link: '/second-route',
      content: 'Second content',
      iconGlyph: 'loan-applications',
    },
    {
      link: '/third-route',
      content: 'Third content',
      iconGlyph: 'loan-policy',
    },
  ],
};

export const Text: Story = {
  args,
  render: (props) => ({
    props,
    template: `
      <nav laiTabNavBar
           [size]="size"
           [type]="type">
        <a *ngFor="let item of data"
           laiTabNavBarLink
           [routerLink]="item.link"
           routerLinkActive="active">
          {{ item.content }}
        </a>
      </nav>
      <router-outlet></router-outlet>
    `,
  }),
};

export const TextWithIcons: Story = {
  args,
  render: (props) => ({
    props,
    template: `
      <nav laiTabNavBar
           [size]="size"
           [type]="type">
        <a *ngFor="let item of data"
           laiTabNavBarLink
           [iconGlyph]="item.iconGlyph"
           [routerLink]="item.link"
           routerLinkActive="active">
          {{ item.content }}
        </a>
      </nav>
      <router-outlet></router-outlet>
    `,
  }),
};
