import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent, TitleLevel } from '../typography';

@Component({
  selector: 'lai-avatar',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @HostBinding('attr.size')
  @Input()
  size: AvatarSize = 'md';

  @Input() initials = '';

  get titleLevel(): TitleLevel {
    return AVATAR_SIZE_TO_TITLE_LEVEL[this.size];
  }
}

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const AVATAR_SIZE_TO_TITLE_LEVEL: Record<AvatarSize, TitleLevel> = {
  xs: 5,
  sm: 5,
  md: 5,
  lg: 5,
  xl: 4,
  xxl: 3,
};
