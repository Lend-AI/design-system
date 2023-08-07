import { StoryFn, moduleMetadata, Meta } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { ButtonBarComponent } from './button-bar.component';

export default {
  title: 'Molecules/Button/ButtonBar',
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent, ButtonBarComponent],
    }),
  ],
} as Meta;

const Template: StoryFn = args => ({
  props: args,
  template: `
    <lai-button-bar>
      <button laiButton hierarchy="primary">Click me!</button>
      <button laiButton hierarchy="secondary">Don't click me!</button>
    </lai-button-bar>
  `,
});

export const ButtonBar = Template.bind({});
ButtonBar.args = {};
