import { StoryFn, Meta, moduleMetadata } from '@storybook/angular';
import { DividerComponent } from './divider.component';
import { BodyComponent } from '../typography';

export default {
  title: 'WIP/Divider',
  decorators: [
    moduleMetadata({
      imports: [DividerComponent, BodyComponent],
    }),
  ],
} as Meta;

const HorizontalDividerTemplate: StoryFn = args => ({
  props: args,
  template: `
    <style>
      .wrlaier {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 250px;
      }
    </style>
    <div class="wrlaier">
      <div>first child</div>
      <lai-divider></lai-divider>
      <div>second child</div>
    </div>
  `,
});
export const HorizontalDivider = HorizontalDividerTemplate.bind({});

const DividerWithTextTemplate: StoryFn = args => ({
  props: args,
  template: `
    <style>
      .wrlaier {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 250px;
      }
    </style>
    <div class="wrlaier">
      <div>first child</div>
      <lai-divider>{{content}}</lai-divider>
      <div>second child</div>
    </div>
  `,
});
export const DividerWithText = DividerWithTextTemplate.bind({});
DividerWithText.args = {
  content: 'content',
};

const VerticalDividerTemplate: StoryFn = args => ({
  props: args,
  template: `
    <style>
      .wrlaier {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        height: 50px;
      }
    </style>
    <div class="wrlaier">
      <div>first child</div>
      <lai-divider type="vertical"></lai-divider>
      <div>second child</div>
    </div>
  `,
});
export const VerticalDivider = VerticalDividerTemplate.bind({});
