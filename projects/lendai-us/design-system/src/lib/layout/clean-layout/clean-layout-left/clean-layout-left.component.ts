import { Component, HostBinding, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'lai-clean-layout-left',
  templateUrl: './clean-layout-left.component.html',
  styleUrls: ['./clean-layout-left.component.scss'],
})
export class CleanLayoutLeftComponent {
  @Input() background!: string;
  @Input() title?: string;

  readonly isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => matches));

  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  @HostBinding('style.background-image')
  get backgroundImage(): string {
    return `url(assets/images/${this.background})`;
  }
}
