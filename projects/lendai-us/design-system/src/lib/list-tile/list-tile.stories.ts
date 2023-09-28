import { StoryFn, Meta, moduleMetadata } from '@storybook/angular';
import { ListTileModule } from './list-tile.module';
import { FlagComponent } from '../icon/flag';

export default {
  title: 'WIP/List Tile',
  decorators: [
    moduleMetadata({
      imports: [ListTileModule, FlagComponent],
    }),
  ],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
  },
} as Meta;

const OnlyTitleTemplate: StoryFn = (args) => ({
  props: args,
  template: `
    <lai-list-tile-group [size]="size">
      <lai-list-tile-item>
        <lai-list-tile-title>{{contentTitle}}</lai-list-tile-title>
      </lai-list-tile-item>
      <lai-list-tile-item>
        <lai-list-tile-title>{{contentTitle}}</lai-list-tile-title>
      </lai-list-tile-item>
    </lai-list-tile-group>
  `,
});

export const OnlyTitle = OnlyTitleTemplate.bind({});

OnlyTitle.args = {
  contentTitle: 'Type your title',
  size: 'md',
};

const TitleWiteAvatarTemplate: StoryFn = (args) => ({
  props: args,
  template: `
    <lai-list-tile-group [size]="size">
      <lai-list-tile-item>
        <lai-list-tile-avatar>
          <lai-flag [country]="country" [type]="type"></lai-flag>
        </lai-list-tile-avatar>
        <lai-list-tile-title>{{contentTitle}}</lai-list-tile-title>
      </lai-list-tile-item>
      <lai-list-tile-item>
        <lai-list-tile-avatar>
          <lai-flag [country]="country" [type]="type"></lai-flag>
        </lai-list-tile-avatar>
        <lai-list-tile-title>{{contentTitle}}</lai-list-tile-title>
      </lai-list-tile-item>
    </lai-list-tile-group>
  `,
});

export const TitleWiteAvatar = TitleWiteAvatarTemplate.bind({});

TitleWiteAvatar.args = {
  contentTitle: 'Type your title',
  size: 'md',
  type: 'circle',
  country: 'IL',
};

const TitleWithSubtitleTemplate: StoryFn = (args) => ({
  props: args,
  template: `
    <lai-list-tile-group [size]="size">
      <lai-list-tile-item>
        <lai-list-tile-avatar>
          <lai-flag [country]="country" [type]="type"></lai-flag>
        </lai-list-tile-avatar>
        <lai-list-tile-title>{{contentTitle}}</lai-list-tile-title>
        <lai-list-tile-subtitle>{{contentSubTitle}}</lai-list-tile-subtitle>
      </lai-list-tile-item>
      <lai-list-tile-item>
        <lai-list-tile-avatar>
          <lai-flag [country]="country" [type]="type"></lai-flag>
        </lai-list-tile-avatar>
        <lai-list-tile-title>{{contentTitle}}</lai-list-tile-title>
        <lai-list-tile-subtitle>{{contentSubTitle}}</lai-list-tile-subtitle>
      </lai-list-tile-item>
    </lai-list-tile-group>
  `,
});

export const TitleWithSubtitle = TitleWithSubtitleTemplate.bind({});

TitleWithSubtitle.args = {
  contentTitle: 'Type your title',
  contentSubTitle: 'Descriptive text for list content',
  size: 'md',
  type: 'circle',
  country: 'IL',
};

const TitleWithDescriptionTemplate: StoryFn = (args) => ({
  props: args,
  template: `
  <lai-list-tile-group [size]="size">
    <lai-list-tile-item>
      <lai-list-tile-avatar>
        <lai-flag [country]="country" [type]="type"></lai-flag>
      </lai-list-tile-avatar>
      <lai-list-tile-title>{{contentTitle}}</lai-list-tile-title>
      <lai-list-tile-description>{{contentText}}</lai-list-tile-description>
    </lai-list-tile-item>
    <lai-list-tile-item>
      <lai-list-tile-avatar>
        <lai-flag [country]="country" [type]="type"></lai-flag>
      </lai-list-tile-avatar>
      <lai-list-tile-title>{{contentTitle}}</lai-list-tile-title>
      <lai-list-tile-description>{{contentText}}</lai-list-tile-description>
    </lai-list-tile-item>
  </lai-list-tile-group>
  `,
});

export const TitleWithDescription = TitleWithDescriptionTemplate.bind({});

TitleWithDescription.args = {
  contentTitle: 'Type your title',
  contentText: 'List tile description',
  size: 'md',
  type: 'circle',
  country: 'IL',
};

const FullListTileTemplate: StoryFn = (args) => ({
  props: args,
  template: `
    <lai-list-tile-group [size]="size">
      <lai-list-tile-item>
        <lai-list-tile-avatar>
          <lai-flag [country]="country" [type]="type"></lai-flag>
        </lai-list-tile-avatar>
        <lai-list-tile-title>{{contentTitle}}</lai-list-tile-title>
        <lai-list-tile-subtitle>{{contentSubTitle}}</lai-list-tile-subtitle>
        <lai-list-tile-description>{{contentText}}</lai-list-tile-description>
      </lai-list-tile-item>
      <lai-list-tile-item>
        <lai-list-tile-avatar>
          <lai-flag [country]="country" [type]="type"></lai-flag>
        </lai-list-tile-avatar>
        <lai-list-tile-title>{{contentTitle}}</lai-list-tile-title>
        <lai-list-tile-subtitle>{{contentSubTitle}}</lai-list-tile-subtitle>
        <lai-list-tile-description>{{contentText}}</lai-list-tile-description>
      </lai-list-tile-item>
    </lai-list-tile-group>
  `,
});

export const FullListTile = FullListTileTemplate.bind({});

FullListTile.args = {
  contentTitle: 'Type your title',
  contentSubTitle: 'Descriptive text for list content',
  contentText: 'List tile description',
  size: 'md',
  type: 'circle',
  country: 'IL',
};
