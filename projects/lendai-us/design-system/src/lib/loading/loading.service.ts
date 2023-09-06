import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { FullScreenLoadingOverlayComponent } from './full-screen-loading-overlay/full-screen-loading-overlay.component';

@Injectable()
export class LoadingService {
  private dialogRef: DialogRef<void, FullScreenLoadingOverlayComponent> | null =
    null;

  constructor(private readonly dialog: Dialog) {}

  open(): void {
    if (this.dialogRef) {
      console.warn('loading is already opened');
      return;
    }

    this.dialogRef = this.dialog.open(FullScreenLoadingOverlayComponent, {
      hasBackdrop: false,
    });
  }

  close(): void {
    if (!this.dialogRef) {
      console.warn('loading is not opened');
      return;
    }

    this.dialogRef.close();
    this.dialogRef = null;
  }
}
