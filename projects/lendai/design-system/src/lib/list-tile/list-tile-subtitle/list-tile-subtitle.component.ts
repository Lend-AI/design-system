import { Component } from '@angular/core';
import {
  ListTileGroupComponent,
  ListTileGroupSize,
} from '../list-tile-group/list-tile-group.component';
import { BodyLevel } from '../../typography';

@Component({
  selector: 'lai-list-tile-subtitle',
  templateUrl: './list-tile-subtitle.component.html',
  styleUrls: ['./list-tile-subtitle.component.scss'],
})
export class ListTileSubtitleComponent {
  constructor(private readonly parent: ListTileGroupComponent) {}

  get level(): BodyLevel {
    return LIST_TILE_SIZE_TO_SUBTITLE[this.parent.size];
  }
}

const LIST_TILE_SIZE_TO_SUBTITLE: Record<ListTileGroupSize, BodyLevel> = {
  sm: 6,
  md: 5,
  lg: 4,
};
