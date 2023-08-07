import { Component, HostBinding, Input, ViewChild } from '@angular/core';
import { BodyComponent } from '../typography';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'lai-divider',
  standalone: true,
  imports: [BodyComponent],
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent {
  @Input()
  @HostBinding('attr.type')
  type: DividerType = 'horizontal';

  @Input()
  @HostBinding('attr.background')
  background: DividerBackground = 'light';

  @ViewChild(BodyComponent, { static: true, read: ElementRef })
  bodyElRef!: ElementRef;

  @HostBinding('class.empty')
  get isEmpty(): boolean {
    return !this.bodyElRef.nativeElement.innerHTML;
  }
}

export type DividerType = 'horizontal' | 'vertical';

export type DividerBackground = 'light' | 'dark';
