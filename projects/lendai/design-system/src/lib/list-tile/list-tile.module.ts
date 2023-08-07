import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTileAvatarComponent } from './list-tile-avatar/list-tile-avatar.component';
import { ListTileSubtitleComponent } from './list-tile-subtitle/list-tile-subtitle.component';
import { ListTileDescriptionComponent } from './list-tile-description/list-tile-description.component';
import { ListTileTitleComponent } from './list-tile-title/list-tile-title.component';
import { AvatarComponent } from '../avatar';
import { BodyComponent, TitleComponent } from '../typography';
import { ListTileItemComponent } from './list-tile-item/list-tile-item.component';
import { ListTileGroupComponent } from './list-tile-group/list-tile-group.component';

@NgModule({
  declarations: [
    ListTileAvatarComponent,
    ListTileSubtitleComponent,
    ListTileDescriptionComponent,
    ListTileTitleComponent,
    ListTileItemComponent,
    ListTileGroupComponent,
  ],
  imports: [CommonModule, TitleComponent, AvatarComponent, BodyComponent],
  exports: [
    ListTileAvatarComponent,
    ListTileSubtitleComponent,
    ListTileDescriptionComponent,
    ListTileTitleComponent,
    ListTileItemComponent,
    ListTileGroupComponent,
  ],
})
export class ListTileModule {}
