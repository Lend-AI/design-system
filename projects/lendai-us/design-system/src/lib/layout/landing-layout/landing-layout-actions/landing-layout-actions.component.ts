import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lai-landing-layout-actions',
  templateUrl: './landing-layout-actions.component.html',
  styleUrls: ['./landing-layout-actions.component.scss'],
})
export class LandingLayoutActionsComponent {
  @ViewChild(TemplateRef, { static: true }) content!: TemplateRef<unknown>;
}
