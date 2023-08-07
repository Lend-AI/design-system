import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CleanLayoutComponent } from './clean-layout.component';
import { CleanLayoutLeftComponent } from './clean-layout-left/clean-layout-left.component';
import { CleanLayoutRightComponent } from './clean-layout-right/clean-layout-right.component';
import { LogoComponent } from '../../logo';
import { HeadlineComponent } from '../../typography';
import { LetDirective } from '@lendai/cdk';

@NgModule({
  declarations: [
    CleanLayoutComponent,
    CleanLayoutLeftComponent,
    CleanLayoutRightComponent,
  ],
  imports: [CommonModule, LogoComponent, HeadlineComponent, LetDirective],
  exports: [
    CleanLayoutComponent,
    CleanLayoutLeftComponent,
    CleanLayoutRightComponent,
  ],
})
export class CleanLayoutModule {}
