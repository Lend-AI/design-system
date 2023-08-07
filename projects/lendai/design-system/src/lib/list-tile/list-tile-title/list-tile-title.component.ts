import { Component } from '@angular/core';
import { TitleLevel } from '../../typography';
import {
  ListTileGroupComponent,
  ListTileGroupSize,
} from '../list-tile-group/list-tile-group.component';

@Component({
  selector: 'lai-list-tile-title',
  templateUrl: './list-tile-title.component.html',
  styleUrls: ['./list-tile-title.component.scss'],
})
export class ListTileTitleComponent {
  constructor(private readonly parent: ListTileGroupComponent) {}

  get level(): TitleLevel {
    return LIST_TILE_SIZE_TO_TITLE[this.parent.size];
  }
}

const LIST_TILE_SIZE_TO_TITLE: Record<ListTileGroupSize, TitleLevel> = {
  sm: 5,
  md: 5,
  lg: 5,
};
