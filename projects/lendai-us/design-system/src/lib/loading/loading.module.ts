import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FullScreenLoadingOverlayComponent } from './full-screen-loading-overlay/full-screen-loading-overlay.component';
import { DialogModule } from '@angular/cdk/dialog';
import { LoadingService } from './loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [LoadingSpinnerComponent, FullScreenLoadingOverlayComponent],
  imports: [CommonModule, DialogModule, MatProgressSpinnerModule],
  exports: [LoadingSpinnerComponent],
  providers: [LoadingService],
})
export class LoadingModule {}
