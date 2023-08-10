import {
  Component,
  ContentChild,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { LandingPageLayoutActionsComponent } from './landing-page-layout-actions/landing-page-layout-actions.component';
import { LandingPageLayoutContentComponent } from './landing-page-layout-content/landing-page-layout-content.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription, map } from 'rxjs';
import { LANDING_PAGE_SERVICE } from './landing-page-layout-service';
import { IconGlyph } from '../../icon';

@Component({
  selector: 'lai-landing-page-layout',
  templateUrl: './landing-page-layout.component.html',
  styleUrls: ['./landing-page-layout.component.scss'],
})
export class LandingPageLayoutComponent implements OnInit, OnDestroy {
  @ContentChild(LandingPageLayoutActionsComponent)
  private readonly actionsComponent?: LandingPageLayoutActionsComponent;
  @ContentChild(LandingPageLayoutContentComponent)
  public readonly contentComponent?: LandingPageLayoutContentComponent;

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
