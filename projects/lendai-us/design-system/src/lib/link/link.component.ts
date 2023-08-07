import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'a[laiLink]',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @HostBinding('attr.type')
  @Input()
  type: LinkType = 'standalone';

  @HostBinding('attr.level')
  @Input()
  level: LinkLevel = 'md';
}

export type LinkType = 'inline' | 'standalone';

export type LinkLevel = 'sm' | 'md' | 'lg';
