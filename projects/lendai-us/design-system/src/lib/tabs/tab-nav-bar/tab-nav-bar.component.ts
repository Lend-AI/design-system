import { Component, HostBinding, Input } from '@angular/core';
import { TabSize, TabType } from '../shared';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'nav[laiTabNavBar]',
  templateUrl: './tab-nav-bar.component.html',
  styleUrls: ['./tab-nav-bar.component.scss'],
})
export class TabNavBarComponent {
  @Input()
  @HostBinding('attr.size')
  size: TabSize = 'md';

  @Input()
  @HostBinding('attr.type')
  type: TabType = 'line';
}
