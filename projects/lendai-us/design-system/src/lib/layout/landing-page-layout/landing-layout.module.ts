import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingLayoutComponent } from './landing-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LandingLayoutCategoriesComponent } from './landing-layout-categories/landing-layout-categories.component';
import { LandingLayoutActionsComponent } from './landing-layout-actions/landing-layout-actions.component';
import { HiddenDirective, LetDirective } from '@lendai-us/cdk';
import { LandingLayoutContentComponent } from './landing-layout-content/landing-layout-content.component';
import { IconComponent } from '../../icon';
import { DividerComponent } from '../../divider';
import { ButtonBarComponent, ButtonComponent } from '../../button';
import {
  BodyComponent,
  CaptionComponent,
  HeadlineComponent,
} from '../../typography';
import { LogoComponent } from '../../logo';
import { LandingLayoutFooterComponent } from './landing-layout-footer/landing-layout-footer.component';

@NgModule({
  declarations: [
    LandingLayoutComponent,
    LandingLayoutCategoriesComponent,
    LandingLayoutActionsComponent,
    LandingLayoutContentComponent,
    LandingLayoutFooterComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    IconComponent,
    HiddenDirective,
    DividerComponent,
    HeadlineComponent,
    BodyComponent,
    ButtonComponent,
    CaptionComponent,
    ButtonBarComponent,
    LogoComponent,
    LetDirective,
  ],
  exports: [
    LandingLayoutComponent,
    LandingLayoutActionsComponent,
    LandingLayoutContentComponent,
    LandingLayoutFooterComponent,
  ],
})
export class LandingLayoutModule {}
