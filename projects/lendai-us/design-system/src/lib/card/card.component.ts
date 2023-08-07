import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lai-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  @HostBinding('attr.radius')
  radius: CardRadius = 'sm';

  @Input()
  @HostBinding('attr.size')
  size: CardSize = 'md';
}

export type CardRadius = 'sm' | 'md';

export type CardSize = 'sm' | 'md';
