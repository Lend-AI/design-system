import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lai-side-drawer-warning',
  templateUrl: './side-drawer-warning.component.html',
  styleUrls: ['./side-drawer-warning.component.scss'],
})
export class SideDrawerWarningComponent {
  @Input()
  color: SideDrawerWarningColor = 'warning';

  @ViewChild(TemplateRef) templateRef!: TemplateRef<unknown>;
}

export type SideDrawerWarningColor = 'warning';
