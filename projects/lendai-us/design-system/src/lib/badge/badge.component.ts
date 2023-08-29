import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelComponent, LabelLevel } from '../typography';

@Component({
  selector: 'lai-badge',
  standalone: true,
  imports: [CommonModule, LabelComponent],
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @HostBinding('attr.color')
  @Input()
  color: BadgeColor = 'blue';

  @HostBinding('attr.size')
  @Input()
  size: BadgeSize = 'md';

  get level(): LabelLevel {
    return BADGE_SIZE_TO_LABEL_LEVEL[this.size];
  }
}

export const BADGE_SIZES = ['sm', 'md'] as const;
export type BadgeSize = (typeof BADGE_SIZES)[number];

export const BADGE_COLORS = [
  'gray',
  'purple',
  'blue',
  'red',
  'orange',
  'green',
  'pink',
  'aqua',
] as const;
export type BadgeColor = (typeof BADGE_COLORS)[number];

const BADGE_SIZE_TO_LABEL_LEVEL: Record<BadgeSize, LabelLevel> = {
  sm: 'sm',
  md: 'md',
};
