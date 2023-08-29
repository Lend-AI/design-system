import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { LabelComponent } from '../typography';

@NgModule({
  declarations: [TooltipComponent, TooltipDirective],
  imports: [CommonModule, LabelComponent],
  exports: [TooltipDirective],
})
export class TooltipModule {}
