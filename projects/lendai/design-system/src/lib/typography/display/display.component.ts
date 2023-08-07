import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from '../typography.component';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'lai-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements TypographyComponent<DisplayLevel> {
  @HostBinding('attr.level')
  @Input()
  set level(value: DisplayLevel | string) {
    this._level = coerceNumberProperty(value, 1) as DisplayLevel;
  }

  get level(): DisplayLevel {
    return this._level;
  }

  private _level: DisplayLevel = 1;
}

export const DISPLAY_LEVELS = [1, 2, 3] as const;
export type DisplayLevel = (typeof DISPLAY_LEVELS)[number];
