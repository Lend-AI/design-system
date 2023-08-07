import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from '../typography.component';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'lai-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements TypographyComponent<TitleLevel> {
  @HostBinding('attr.level')
  @Input()
  set level(value: TitleLevel | string) {
    this._level = coerceNumberProperty(value, 1) as TitleLevel;
  }

  get level(): TitleLevel {
    return this._level;
  }

  private _level: TitleLevel = 1;
}

export const TITLE_LEVELS = [1, 2, 3, 4, 5] as const;
export type TitleLevel = (typeof TITLE_LEVELS)[number];
