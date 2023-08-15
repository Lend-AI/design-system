import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  SIDENAV_LAYOUT_SERVICE,
  SidenavLayoutCategory,
} from '../sidenav-layout.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lai-sidenav-layout-categories',
  templateUrl: './sidenav-layout-categories.component.html',
  styleUrls: ['./sidenav-layout-categories.component.scss'],
})
export class SidenavLayoutCategoriesComponent implements OnInit, OnDestroy {
  sidenavCategories: SidenavLayoutCategory[] = [];

  private readonly service = inject(SIDENAV_LAYOUT_SERVICE);
  private readonly sub$ = new Subscription();

  ngOnInit(): void {
    this.sub$.add(
      this.service.sidenavCategories$.subscribe(
        sidenavCategories => (this.sidenavCategories = sidenavCategories)
      )
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
