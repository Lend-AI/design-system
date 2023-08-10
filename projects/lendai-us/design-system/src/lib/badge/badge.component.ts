import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptionComponent } from '../typography';

@Component({
  selector: 'lai-badge',
  standalone: true,
  imports: [CommonModule, CaptionComponent],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @HostBinding('attr.color')
  @Input()
  color: BadgeColor = 'info';

  @HostBinding('attr.radius')
  @Input()
  radius: BadgeRadius = 'xs';

  @HostBinding('attr.type')
  @Input()
  type: BadgeType = 'transparent';
}

export type BadgeColor =
  | 'primary'
  | 'info'
  | 'error'
  | 'success'
  | 'warning'
  | 'gray'
  | 'pink';

export type BadgeRadius = 'xs' | 'sm';

export type BadgeType = 'transparent' | 'solid';
