import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyComponent } from '../typography.component';

@Component({
  selector: 'lai-overline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overline.component.html',
  styleUrls: ['./overline.component.scss'],
})
export class OverlineComponent implements TypographyComponent<OverlineLevel> {
  @HostBinding('attr.level')
  @Input()
  level: OverlineLevel = 'sm';
}

export type OverlineLevel = 'lg' | 'md' | 'sm';
