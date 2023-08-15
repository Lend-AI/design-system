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
import { LANDING_PAGE_SERVICE } from './landing-layout.service';
import { IconGlyph } from '../../icon';
import { LandingLayoutFooterComponent } from './landing-layout-footer/landing-layout-footer.component';

@Component({
  selector: 'lai-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss'],
})
export class LandingLayoutComponent implements OnInit, OnDestroy {
  @ContentChild(LandingLayoutActionsComponent)
  private readonly actionsComponent?: LandingLayoutActionsComponent;
  @ContentChild(LandingLayoutContentComponent)
  public readonly contentComponent?: LandingLayoutContentComponent;
  @ContentChild(LandingLayoutFooterComponent)
  public readonly footerComponent?: LandingLayoutFooterComponent;

  get isHeaderHidden(): boolean {
    return !this.actionsComponent;
  }

  protected readonly service = inject(LANDING_PAGE_SERVICE);
  private readonly sub$ = new Subscription();
  logoPath!: string;
  isHandset!: boolean;
  status!: boolean;
  icon: IconGlyph = 'bars';

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

  private readonly breakpointObserver = inject(BreakpointObserver);
  readonly isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => matches));

  clickEvent(): void {
    this.status = !this.status;
    if (this.status) {
      this.icon = 'close';
    } else {
      this.icon = 'bars';
    }
  }
}
