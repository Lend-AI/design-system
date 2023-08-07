import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabComponent } from './tab/tab.component';
import { TabLabelComponent } from './tab-label/tab-label.component';
import { TabGroupBodyComponent } from './tab-group-body/tab-group-body.component';
import { TabGroupHeaderComponent } from './tab-group-header/tab-group-header.component';
import { BodyComponent } from '../typography';
import { IconComponent } from '../icon';
import { TabNavBarComponent } from './tab-nav-bar/tab-nav-bar.component';
import { TabNavBarLinkComponent } from './tab-nav-bar-link/tab-nav-bar-link.component';

@NgModule({
  declarations: [
    TabGroupComponent,
    TabComponent,
    TabLabelComponent,
    TabGroupBodyComponent,
    TabGroupHeaderComponent,
    TabNavBarComponent,
    TabNavBarLinkComponent,
  ],
  imports: [CommonModule, BodyComponent, IconComponent],
  exports: [
    TabGroupComponent,
    TabComponent,
    TabNavBarComponent,
    TabNavBarLinkComponent,
  ],
})
export class TabsModule {}
