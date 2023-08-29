import { Component, ContentChild } from '@angular/core';
import { LandingLayoutActionsComponent } from './landing-layout-actions/landing-layout-actions.component';

@Component({
  selector: 'lai-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss'],
})
export class LandingLayoutComponent {
  @ContentChild(LandingLayoutActionsComponent, { static: true })
  actions?: LandingLayoutActionsComponent;
}
