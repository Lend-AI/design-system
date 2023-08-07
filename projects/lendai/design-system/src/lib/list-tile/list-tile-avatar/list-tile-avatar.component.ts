import {
  Component,
  ContentChild,
  OnDestroy,
  AfterContentInit,
} from '@angular/core';
import {
  ListTileGroupComponent,
  ListTileGroupSize,
} from '../list-tile-group/list-tile-group.component';
import { Subscription, startWith } from 'rxjs';
import { FlagComponent, FlagSize } from '../../icon/flag/flag.component';
import {
  UsFlagComponent,
  UsFlagSize,
} from '../../icon/us-flag/us-flag.component';

@Component({
  selector: 'lai-list-tile-avatar',
  templateUrl: './list-tile-avatar.component.html',
  styleUrls: ['./list-tile-avatar.component.scss'],
})
export class ListTileAvatarComponent implements AfterContentInit, OnDestroy {
  @ContentChild(FlagComponent) flag?: FlagComponent;
  @ContentChild(UsFlagComponent) usFlag?: UsFlagComponent;

  sub$ = new Subscription();

  constructor(private readonly parent: ListTileGroupComponent) {}

  ngAfterContentInit(): void {
    this.sub$.add(
      this.parent.sizeChanged$
        .pipe(startWith(this.parent.size))
        .subscribe(size => {
          if (!this.flag) {
            return;
          }

          this.flag.size = LIST_TILE_SIZE_TO_FLAG[size];
        })
    );
    this.sub$.add(
      this.parent.sizeChanged$
        .pipe(startWith(this.parent.size))
        .subscribe(size => {
          if (!this.usFlag) {
            return;
          }

          this.usFlag.size = LIST_TILE_SIZE_TO_US_FLAG_SIZE[size];
        })
    );
    this.sub$.add(
      this.parent.avatarTypeChanged$
        .pipe(startWith(this.parent.avatarType))
        .subscribe(() => {
          if (!this.flag) {
            return;
          }

          this.flag.type = this.parent.avatarType;
        })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}

const LIST_TILE_SIZE_TO_FLAG: Record<ListTileGroupSize, FlagSize> = {
  sm: 's',
  md: 'm',
  lg: 'l',
};

const LIST_TILE_SIZE_TO_US_FLAG_SIZE: Record<ListTileGroupSize, UsFlagSize> = {
  sm: 's',
  md: 'm',
  lg: 'l',
};
