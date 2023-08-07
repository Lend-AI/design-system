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
  color: ButtonColor = 'default';
}

export type ButtonColor = 'default' | 'success' | 'destructive';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonHierarchy = 'primary' | 'secondary' | 'tertiary';
