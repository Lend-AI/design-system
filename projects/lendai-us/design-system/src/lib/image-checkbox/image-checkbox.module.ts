import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCheckboxGroupComponent } from './image-checkbox-group/image-checkbox-group.component';
import { ImageCheckboxComponent } from './image-checkbox/image-checkbox.component';
import { TitleComponent } from '../typography';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [ImageCheckboxGroupComponent, ImageCheckboxComponent],
  imports: [CommonModule, TitleComponent, MatCheckboxModule],
  exports: [ImageCheckboxGroupComponent, ImageCheckboxComponent],
})
export class ImageCheckboxModule {}
