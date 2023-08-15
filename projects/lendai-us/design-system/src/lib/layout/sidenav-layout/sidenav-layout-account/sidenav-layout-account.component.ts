import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { SIDENAV_LAYOUT_SERVICE } from '../sidenav-layout.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription, map } from 'rxjs';

@Component({
  selector: 'lai-sidenav-layout-account',
  templateUrl: './sidenav-layout-account.component.html',
  styleUrls: ['./sidenav-layout-account.component.scss'],
})
export class SidenavLayoutAccountComponent implements OnInit, OnDestroy {
  firstName = '';
  lastName = '';
  accountInfo = '';

  readonly isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => matches));

  protected readonly service = inject(SIDENAV_LAYOUT_SERVICE);

  private readonly sub$ = new Subscription();

  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.sub$.add(
      this.service.firstName$.subscribe(
        firstName => (this.firstName = firstName)
      )
    );
    this.sub$.add(
      this.service.firstName$.subscribe(
        firstName => (this.firstName = firstName)
      )
    );
    this.sub$.add(
      this.service.lastName$.subscribe(lastName => (this.lastName = lastName))
    );
    this.sub$.add(
      this.service.accountInfo$.subscribe(
        accountInfo => (this.accountInfo = accountInfo)
      )
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
