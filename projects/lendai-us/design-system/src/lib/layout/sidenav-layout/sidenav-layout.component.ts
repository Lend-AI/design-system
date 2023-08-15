import {
  Component,
  ContentChild,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SidenavLayoutTitleComponent } from './sidenav-layout-title/sidenav-layout-title.component';
import { SidenavLayoutSubtitleComponent } from './sidenav-layout-subtitle/sidenav-layout-subtitle.component';
import { SidenavLayoutActionsComponent } from './sidenav-layout-actions/sidenav-layout-actions.component';
import { SidenavLayoutContentComponent } from './sidenav-layout-content/sidenav-layout-content.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription, map } from 'rxjs';
import { SIDENAV_LAYOUT_SERVICE } from './sidenav-layout.service';
import { IconGlyph } from '../../icon';

@Component({
  selector: 'lai-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.scss'],
})
export class SidenavLayoutComponent implements OnInit, OnDestroy {
  @ContentChild(SidenavLayoutTitleComponent)
  private readonly titleComponent?: SidenavLayoutTitleComponent;
  @ContentChild(SidenavLayoutSubtitleComponent)
  private readonly subtitleComponent?: SidenavLayoutSubtitleComponent;
  @ContentChild(SidenavLayoutActionsComponent)
  private readonly actionsComponent?: SidenavLayoutActionsComponent;
  @ContentChild(SidenavLayoutContentComponent)
  public readonly contentComponent?: SidenavLayoutContentComponent;

  get isHeaderHidden(): boolean {
    return (
      !this.titleComponent && !this.subtitleComponent && !this.actionsComponent
    );
  }

  protected readonly service = inject(SIDENAV_LAYOUT_SERVICE);
  private readonly sub$ = new Subscription();
  firstName!: string;
  lastName!: string;
  accountInfo!: string;
  logOutText!: string;
  isHandset!: boolean;
  status!: boolean;
  icon: IconGlyph = 'bars';

  ngOnInit(): void {
    this.sub$.add(
      this.service.firstName$.subscribe(
        firstName => (this.firstName = firstName)
      )
    );
    this.sub$.add(
      this.service.lastName$.subscribe(lastName => (this.lastName = lastName))
    );
    this.sub$.add(
      this.isHandset$.subscribe(isHandset => {
        this.status = !isHandset;
      })
    );
    this.sub$.add(
      this.service.accountInfo$.subscribe(
        accountInfo => (this.accountInfo = accountInfo)
      )
    );
    this.sub$.add(
      this.service.logOutText$.subscribe(
        logOutText => (this.logOutText = logOutText)
      )
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
