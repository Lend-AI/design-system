import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  LANDING_LAYOUT_SERVICE,
  LandingLayoutCategory,
} from '../landing-layout.service';
import { map, Observable, Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'lai-landing-layout-categories',
  templateUrl: './landing-layout-categories.component.html',
  styleUrls: ['./landing-layout-categories.component.scss'],
})
export class LandingLayoutCategoriesComponent implements OnInit, OnDestroy {
  status!: boolean;
  landingLayoutCategories: LandingLayoutCategory[] = [];

  readonly isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => matches));

  private readonly service = inject(LANDING_LAYOUT_SERVICE);
  private readonly sub$ = new Subscription();

  constructor(private readonly breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.sub$.add(
      this.service.landingLayoutCategories$.subscribe(
        landingLayoutCategories =>
          (this.landingLayoutCategories = landingLayoutCategories)
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
}
