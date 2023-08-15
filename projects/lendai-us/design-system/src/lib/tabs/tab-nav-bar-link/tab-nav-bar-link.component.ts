import { Component, HostBinding, Input, inject } from '@angular/core';
import { TabNavBarComponent } from '../tab-nav-bar/tab-nav-bar.component';
import { BodyLevel } from '../../typography';
import { IconGlyph, IconSize } from '../../icon';
import {
  TAB_GROUP_SIZE_TO_BODY_LEVEL,
  TAB_GROUP_SIZE_TO_ICON_SIZE,
} from '../shared';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[laiTabNavBarLink]',
  templateUrl: './tab-nav-bar-link.component.html',
  styleUrls: ['./tab-nav-bar-link.component.scss'],
})
export class TabNavBarLinkComponent {
  @Input() iconGlyph?: IconGlyph;

  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  parent: TabNavBarComponent = inject(TabNavBarComponent);

  get bodyLevel(): BodyLevel {
    return TAB_GROUP_SIZE_TO_BODY_LEVEL[this.parent.size];
  }

  get iconSize(): IconSize {
    return TAB_GROUP_SIZE_TO_ICON_SIZE[this.parent.size];
  }
}
