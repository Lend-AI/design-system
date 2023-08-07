import { Component } from '@angular/core';
import {
  ListTileGroupComponent,
  ListTileGroupSize,
} from '../list-tile-group/list-tile-group.component';
import { BodyLevel } from '../../typography';

@Component({
  selector: 'lai-list-tile-description',
  templateUrl: './list-tile-description.component.html',
  styleUrls: ['./list-tile-description.component.scss'],
})
export class ListTileDescriptionComponent {
  constructor(private readonly parent: ListTileGroupComponent) {}

  get level(): BodyLevel {
    return LIST_TILE_SIZE_TO_DESCRIPTION[this.parent.size];
  }
}

const LIST_TILE_SIZE_TO_DESCRIPTION: Record<ListTileGroupSize, BodyLevel> = {
  sm: 6,
  md: 5,
  lg: 4,
};
