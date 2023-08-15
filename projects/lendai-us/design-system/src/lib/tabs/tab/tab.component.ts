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
  @Input() removable = false;
  @Input() disabled = false;

  @ViewChild(TemplateRef, { static: true }) content!: TemplateRef<unknown>;
}
