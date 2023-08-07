import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'lai-us-flag',
  standalone: true,
  templateUrl: './us-flag.component.html',
  styleUrls: ['./us-flag.component.scss'],
})
export class UsFlagComponent {
  @HostBinding('attr.state')
  @Input()
  state!: UsFlagState;

  @HostBinding('attr.size')
  @Input()
  size?: UsFlagSize = 'm';
}

export const US_FLAG_STATES = [
  'AL',
  'AZ',
  'FL',
  'GA',
  'IL',
  'IN',
  'MI',
  'MO',
  'NC',
  'NY',
  'OH',
  'OK',
  'PA',
  'SC',
  'TN',
  'TX',
  'WI',
] as const;
export type UsFlagState = (typeof US_FLAG_STATES)[number];

export const US_FLAG_SIZES = ['xs', 's', 'm', 'l', 'xl'] as const;
export type UsFlagSize = (typeof US_FLAG_SIZES)[number];
