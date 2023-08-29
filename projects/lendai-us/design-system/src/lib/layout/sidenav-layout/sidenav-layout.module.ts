import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavLayoutComponent } from './sidenav-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SidenavLayoutCategoriesComponent } from './sidenav-layout-categories/sidenav-layout-categories.component';
import { SidenavLayoutAccountComponent } from './sidenav-layout-account/sidenav-layout-account.component';
import { SidenavLayoutSubtitleComponent } from './sidenav-layout-subtitle/sidenav-layout-subtitle.component';
import { SidenavLayoutTitleComponent } from './sidenav-layout-title/sidenav-layout-title.component';
import { SidenavLayoutActionsComponent } from './sidenav-layout-actions/sidenav-layout-actions.component';
import { HiddenDirective, LetDirective } from '@lendai-us/cdk';
import { SidenavLayoutContentComponent } from './sidenav-layout-content/sidenav-layout-content.component';
import { SidenavLayoutAvatarComponent } from './sidenav-layout-avatar/sidenav-layout-avatar.component';
import { IconComponent } from '../../icon';
import { DividerComponent } from '../../divider';
import { ButtonComponent } from '../../button';
import { LogoComponent } from '../../logo';
import { AvatarComponent } from '../../avatar';
import {
  BodyComponent,
  LabelComponent,
  HeadlineComponent,
} from '../../typography';

@NgModule({
  declarations: [
    SidenavLayoutComponent,
    SidenavLayoutCategoriesComponent,
    SidenavLayoutAccountComponent,
    SidenavLayoutSubtitleComponent,
    SidenavLayoutTitleComponent,
    SidenavLayoutActionsComponent,
    SidenavLayoutContentComponent,
    SidenavLayoutAvatarComponent,
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
    LabelComponent,
    LogoComponent,
    AvatarComponent,
    LetDirective,
  ],
  exports: [
    SidenavLayoutComponent,
    SidenavLayoutSubtitleComponent,
    SidenavLayoutTitleComponent,
    SidenavLayoutActionsComponent,
    SidenavLayoutContentComponent,
    SidenavLayoutAvatarComponent,
  ],
})
export class SidenavLayoutModule {}
