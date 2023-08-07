import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from '../typography.component';

@Component({
  selector: 'lai-caption',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.scss'],
})
export class CaptionComponent implements TypographyComponent<CaptionLevel> {
  @HostBinding('attr.level')
  @Input()
  level: CaptionLevel = 'md';
}

export type CaptionLevel = 'lg' | 'md' | 'sm';
