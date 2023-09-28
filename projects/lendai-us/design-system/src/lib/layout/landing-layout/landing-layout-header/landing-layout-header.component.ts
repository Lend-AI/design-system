import {
  Component,
  HostBinding,
  inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { LANDING_LAYOUT_SERVICE } from '../landing-layout.service';
import { map, Observable, Subscription } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { IconGlyph } from '../../../icon';
import { Breakpoints } from '../../../foundations';

@Component({
  selector: 'lai-landing-layout-header',
  templateUrl: './landing-layout-header.component.html',
  styleUrls: ['./landing-layout-header.component.scss'],
})
export class LandingLayoutHeaderComponent implements OnInit, OnDestroy {
  @Input() actionsRef?: TemplateRef<unknown>;

  @HostBinding('class.mobile-nav-open')
  protected isMobileNavOpen = false;

  protected isHandset = false;

  protected readonly service = inject(LANDING_LAYOUT_SERVICE);

  private readonly isHandset$: Observable<boolean> = inject(BreakpointObserver)
    .observe(Breakpoints.mobile)
    .pipe(map(({ matches }) => matches));

  private readonly sub$ = new Subscription();

  protected get mobileNavIcon(): IconGlyph {
    return this.isMobileNavOpen ? 'close' : 'bars';
  }

  ngOnInit(): void {
    this.sub$.add(
      this.isHandset$.subscribe((value) => (this.isHandset = value)),
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  closeMobileNav(): void {
    this.isMobileNavOpen = false;
  }
}
