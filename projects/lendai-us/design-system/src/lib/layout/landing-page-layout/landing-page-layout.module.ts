import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageLayoutComponent } from './landing-page-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LandingPageLayoutCategoriesComponent } from './landing-page-layout-categories/landing-page-layout-categories.component';
import { LandingPageLayoutActionsComponent } from './landing-page-layout-actions/landing-page-layout-actions.component';
import { HiddenDirective, LetDirective } from '@lendai-us/cdk';
import { LandingPageLayoutContentComponent } from './landing-page-layout-content/landing-page-layout-content.component';
import { LandingPageLayoutLogoComponent } from './landing-page-layout-logo/landing-page-layout-logo.component';
import { IconComponent } from '../../icon';
import { DividerComponent } from '../../divider';
import { ButtonBarComponent, ButtonComponent } from '../../button';
import {
  BodyComponent,
  CaptionComponent,
  HeadlineComponent,
} from '../../typography';
import { LogoComponent } from '../../logo';
import { LandingPageLayoutFooterComponent } from './landing-page-layout-footer/landing-page-layout-footer.component';

@NgModule({
  declarations: [
    LandingPageLayoutComponent,
    LandingPageLayoutCategoriesComponent,
    LandingPageLayoutActionsComponent,
    LandingPageLayoutContentComponent,
    LandingPageLayoutLogoComponent,
    LandingPageLayoutFooterComponent,
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
    LandingPageLayoutComponent,
    LandingPageLayoutActionsComponent,
    LandingPageLayoutContentComponent,
    LandingPageLayoutLogoComponent,
    LandingPageLayoutFooterComponent,
  ],
})
export class LandingPageLayoutModule {}
