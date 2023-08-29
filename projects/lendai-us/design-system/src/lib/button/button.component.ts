import { Component, HostBinding, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[laiButton], button[laiIconButton]',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @HostBinding('attr.hierarchy')
  @Input()
  hierarchy: ButtonHierarchy = 'primary';

  @HostBinding('attr.size')
  @Input()
  size: ButtonSize = 'md';

  @HostBinding('attr.color')
  @Input()
  color: ButtonColor = 'primary';
}

export const BUTTON_COLORS = ['primary', 'error', 'success', 'gray'] as const;
export type ButtonColor = (typeof BUTTON_COLORS)[number];

export const BUTTON_SIZES = ['sm', 'md', 'lg'] as const;
export type ButtonSize = (typeof BUTTON_SIZES)[number];

export const BUTTON_HIERARCHIES = ['primary', 'secondary', 'tertiary'] as const;
export type ButtonHierarchy = (typeof BUTTON_HIERARCHIES)[number];
