import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from '../typography.component';

@Component({
  selector: 'lai-label',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements TypographyComponent<LabelLevel> {
  @HostBinding('attr.level')
  @Input()
  level: LabelLevel = 'md';

  @HostBinding('attr.weight')
  @Input()
  weight: LabelWeight = 'regular';

  @HostBinding('class.underline')
  @Input()
  underline = false;
}

export const LABEL_LEVELS = ['lg', 'md', 'sm'] as const;
export type LabelLevel = (typeof LABEL_LEVELS)[number];

export const LABEL_WEIGHTS = ['regular', 'medium', 'semibold'] as const;
export type LabelWeight = (typeof LABEL_WEIGHTS)[number];
