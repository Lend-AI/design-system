import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  LANDING_PAGE_SERVICE,
  LandingPageCategory,
} from '../landing-page-layout-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lai-landing-page-layout-categories',
  templateUrl: './landing-page-layout-categories.component.html',
  styleUrls: ['./landing-page-layout-categories.component.scss'],
})
export class LandingPageLayoutCategoriesComponent implements OnInit, OnDestroy {
  private readonly service = inject(LANDING_PAGE_SERVICE);
  private readonly sub$ = new Subscription();

  landingPageCategories: LandingPageCategory[] = [];

  ngOnInit(): void {
    this.sub$.add(
      this.service.landingPageCategories$.subscribe(
        landingPageCategories =>
          (this.landingPageCategories = landingPageCategories)
      )
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
