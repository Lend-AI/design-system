import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'lai-list-tile-group',
  templateUrl: './list-tile-group.component.html',
  styleUrls: ['./list-tile-group.component.scss'],
})
export class ListTileGroupComponent implements OnChanges {
  @HostBinding('attr.size')
  @Input()
  size: ListTileGroupSize = 'md';

  @HostBinding('attr.avatarType')
  @Input()
  avatarType: ListTileGroupType = 'circle';

  sizeChanged$ = new Subject<ListTileGroupSize>();
  avatarTypeChanged$ = new Subject<ListTileGroupType>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['size']) {
      const size = changes['size'].currentValue;
      this.sizeChanged$.next(size);
    }
    if (changes['avatarType']) {
      const avatarType = changes['avatarType'].currentValue;
      this.avatarTypeChanged$.next(avatarType);
    }
  }
}

export type ListTileGroupSize = 'sm' | 'md' | 'lg';
export type ListTileGroupType = 'circle' | 'rectangle';
