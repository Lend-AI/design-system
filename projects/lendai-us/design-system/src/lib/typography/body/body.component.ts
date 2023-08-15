import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from '../typography.component';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'lai-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements TypographyComponent<BodyLevel> {
  @HostBinding('attr.weight')
  @Input()
  weight: BodyWeight = 'regular';

  private _level: BodyLevel = 4;

  @HostBinding('attr.level')
  @Input()
  get level(): BodyLevel {
    return this._level;
  }
  set level(value: BodyLevel | string) {
    this._level = coerceNumberProperty(value, 1) as BodyLevel;
  }
}

export const BODY_LEVELS = [1, 2, 3, 4, 5, 6] as const;
export type BodyLevel = (typeof BODY_LEVELS)[number];

export const BODY_WEIGHTS = ['regular', 'medium', 'semibold'] as const;
export type BodyWeight = (typeof BODY_WEIGHTS)[number];
