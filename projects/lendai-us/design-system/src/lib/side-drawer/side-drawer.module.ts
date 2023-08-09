import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon/icon.component';
import { SideDrawerHeaderComponent } from './side-drawer-header/side-drawer-header.component';
import { SideDrawerComponent } from './side-drawer.component';
import { SideDrawerWarningComponent } from './side-drawer-warning/side-drawer-warning.component';
import { DialogModule } from '@angular/cdk/dialog';
import { LetDirective } from '@lendai-us/cdk';

@NgModule({
  declarations: [
    SideDrawerComponent,
    SideDrawerHeaderComponent,
    SideDrawerWarningComponent,
  ],
  imports: [CommonModule, IconComponent, DialogModule, LetDirective],
  exports: [
    SideDrawerComponent,
    SideDrawerHeaderComponent,
    SideDrawerWarningComponent,
  ],
})
export class SideDrawerModule {}
