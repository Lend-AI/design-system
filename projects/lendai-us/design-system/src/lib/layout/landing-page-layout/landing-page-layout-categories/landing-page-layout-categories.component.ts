import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  LANDING_PAGE_SERVICE,
  LandingPageCategory,
} from '../landing-page-layout-service';
import { map, Observable, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'lai-landing-page-layout-categories',
  templateUrl: './landing-page-layout-categories.component.html',
  styleUrls: ['./landing-page-layout-categories.component.scss'],
})
export class LandingPageLayoutCategoriesComponent implements OnInit, OnDestroy {
  private readonly service = inject(LANDING_PAGE_SERVICE);
  private readonly sub$ = new Subscription();

  landingPageCategories: LandingPageCategory[] = [];
  isHandset!: boolean;
  status!: boolean;

  ngOnInit(): void {
    this.sub$.add(
      this.service.landingPageCategories$.subscribe(
        landingPageCategories =>
          (this.landingPageCategories = landingPageCategories)
      )
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
}
