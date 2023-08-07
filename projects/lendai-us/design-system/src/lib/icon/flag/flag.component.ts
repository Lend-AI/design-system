import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'lai-flag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
})
export class FlagComponent {
  @Input() country?: string;

  @HostBinding('attr.size')
  @Input()
  size: FlagSize = 's';

  @HostBinding('attr.type')
  @Input()
  type: FlagType = 'rectangle';

  @HostBinding('class')
  get classes(): string {
    return this.country
      ? `fi fi-${this.country.toLowerCase()}`
      : 'fi unknown-country';
  }
}

export type FlagSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export type FlagType = 'rectangle' | 'circle';
