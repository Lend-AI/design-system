import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lai-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent {
  @Input() label!: string;

  @ViewChild(TemplateRef, { static: true }) content!: TemplateRef<unknown>;
}
