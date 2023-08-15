import {
  Component,
  ContentChild,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { LandingLayoutActionsComponent } from './landing-layout-actions/landing-layout-actions.component';
import { LandingLayoutContentComponent } from './landing-layout-content/landing-layout-content.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription, map } from 'rxjs';
import { LANDING_LAYOUT_SERVICE } from './landing-layout.service';
import { IconGlyph } from '../../icon';
import { LandingLayoutFooterComponent } from './landing-layout-footer/landing-layout-footer.component';

@Component({
  selector: 'lai-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss'],
})
export class LandingLayoutComponent implements OnInit, OnDestroy {
  @ContentChild(LandingLayoutContentComponent)
  public readonly contentComponent?: LandingLayoutContentComponent;
  @ContentChild(LandingLayoutFooterComponent)
  public readonly footerComponent?: LandingLayoutFooterComponent;
  @ContentChild(LandingLayoutActionsComponent)
  private readonly actionsComponent?: LandingLayoutActionsComponent;

  logoPath!: string;
  isHandset!: boolean;
  status!: boolean;
  icon: IconGlyph = 'bars';

  readonly isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => matches));

  protected readonly service = inject(LANDING_LAYOUT_SERVICE);

  private readonly sub$ = new Subscription();

  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  get isHeaderHidden(): boolean {
    return !this.actionsComponent;
  }

  ngOnInit(): void {
    this.sub$.add(
      this.service.logoPath$.subscribe(logoPath => (this.logoPath = logoPath))
    );
    this.sub$.add(
      this.isHandset$.subscribe(isHandset => {
        this.status = !isHandset;
      })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  clickEvent(): void {
    this.status = !this.status;
    if (this.status) {
      this.icon = 'close';
    } else {
      this.icon = 'bars';
    }
  }
}
