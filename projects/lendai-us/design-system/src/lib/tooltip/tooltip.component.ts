import { Component, HostBinding, Input } from '@angular/core';
import { TooltipStyle } from './tooltip.models';

@Component({
  selector: 'lai-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() tooltip!: string;

  @HostBinding('style.left.px')
  @Input()
  left!: number;

  @HostBinding('style.top.px')
  @Input()
  top!: number;

  @HostBinding('attr.tooltip-style')
  @Input()
  style!: TooltipStyle;
}
