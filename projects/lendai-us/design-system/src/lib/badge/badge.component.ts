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
  color: BadgeColor = 'blue';

  @HostBinding('attr.radius')
  @Input()
  radius: BadgeRadius = 'xs';

  @HostBinding('attr.type')
  @Input()
  type: BadgeType = 'transparent';
}

export const BADGE_RADIUSES = ['xs', 'sm'] as const;
export type BadgeRadius = (typeof BADGE_RADIUSES)[number];

export const BADGE_TYPES = ['transparent', 'solid'] as const;
export type BadgeType = (typeof BADGE_TYPES)[number];

export const BADGE_COLORS = [
  'purple',
  'blue',
  'red',
  'aqua',
  'orange',
  'gray',
  'pink',
] as const;
export type BadgeColor = (typeof BADGE_COLORS)[number];
