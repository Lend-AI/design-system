import { Component, Input } from '@angular/core';

@Component({
  selector: 'lai-sidenav-layout-avatar',
  templateUrl: './sidenav-layout-avatar.component.html',
  styleUrls: ['./sidenav-layout-avatar.component.scss'],
})
export class SidenavLayoutAvatarComponent {
  @Input() initials!: string;
}
