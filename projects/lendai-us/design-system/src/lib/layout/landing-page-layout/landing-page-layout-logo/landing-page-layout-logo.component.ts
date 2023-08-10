import { Component, Input } from '@angular/core';

@Component({
  selector: 'lai-landing-page-layout-logo',
  templateUrl: './landing-page-layout-logo.component.html',
  styleUrls: ['./landing-page-layout-logo.component.scss'],
})
export class LandingPageLayoutLogoComponent {
  @Input() logoPath!: string;
}
