import {
  Component,
  HostBinding,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Subscription, map } from 'rxjs';
import { CLEAN_LAYOUT_SERVICE } from '../clean-layout.service';
import { Breakpoints } from '../../../foundations';

@Component({
  selector: 'lai-clean-layout-left',
  templateUrl: './clean-layout-left.component.html',
  styleUrls: ['./clean-layout-left.component.scss'],
})
export class CleanLayoutLeftComponent implements OnInit, OnDestroy {
  @Input() background!: string;
  @Input() title?: string;
  logoPath!: string;

  readonly isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.mobile)
    .pipe(map(({ matches }) => matches));

  protected readonly service = inject(CLEAN_LAYOUT_SERVICE);

  private readonly sub$ = new Subscription();

  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  @HostBinding('style.background-image')
  get backgroundImage(): string {
    return `url(assets/images/${this.background})`;
  }

  ngOnInit(): void {
    this.sub$.add(
      this.service.logoPath$.subscribe(
        (logoPath) => (this.logoPath = logoPath),
      ),
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
