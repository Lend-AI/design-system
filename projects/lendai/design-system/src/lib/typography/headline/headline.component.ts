import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from '../typography.component';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'lai-headline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent implements TypographyComponent<HeadlineLevel> {
  @HostBinding('attr.level')
  @Input()
  set level(value: HeadlineLevel | string) {
    this._level = coerceNumberProperty(value, 1) as HeadlineLevel;
  }

  get level(): HeadlineLevel {
    return this._level;
  }

  private _level: HeadlineLevel = 1;
}

export const HEADLINE_LEVELS = [1, 2, 3, 4, 5];
export type HeadlineLevel = (typeof HEADLINE_LEVELS)[number];
