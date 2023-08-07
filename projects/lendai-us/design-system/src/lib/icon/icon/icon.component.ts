import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lai-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @HostBinding('attr.glyph')
  @Input()
  glyph!: IconGlyph;

  @HostBinding('attr.size')
  @Input()
  size?: IconSize;
}

export const ICON_GLYPHS = [
  'back',
  'comments',
  'communication',
  'edit',
  'dashboard',
  'filter',
  'forward',
  'logout',
  'trash',
  'upload',
  'loan-policy',
  'cv',
  'external-link',
  'close',
  'loan-applications',
  'calendar',
  'mail',
  'phone',
  'close-circle',
  'checkmark',
  'add',
  'remove',
  'info',
  'error',
  'expand-arrow',
  'reset',
  'bars',
] as const;
export type IconGlyph = (typeof ICON_GLYPHS)[number];

export const ICON_SIZES = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
export type IconSize = (typeof ICON_SIZES)[number];
