import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { IconGlyph } from '../../icon';

@Component({
  selector: 'lai-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  @Input() iconGlyph?: IconGlyph;
  @Input() label!: string;

  @Input()
  set removable(value: boolean | string) {
    this._removable = coerceBooleanProperty(value);
  }
  get removable(): boolean {
    return this._removable;
  }

  @Input()
  set disabled(value: boolean | string) {
    this._disabled = coerceBooleanProperty(value);
  }
  get disabled(): boolean {
    return this._disabled;
  }

  @ViewChild(TemplateRef, { static: true }) content!: TemplateRef<unknown>;

  private _removable = false;
  private _disabled = false;
}
