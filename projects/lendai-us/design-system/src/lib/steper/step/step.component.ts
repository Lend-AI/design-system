import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { IconGlyph } from '../../icon';

@Component({
  selector: 'lai-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent {
  @Input() iconGlyph?: IconGlyph;
  @Input() label!: string;
  @Input() removable = false;
  @Input() disabled = false;

  @ViewChild(TemplateRef, { static: true }) content!: TemplateRef<unknown>;
}
