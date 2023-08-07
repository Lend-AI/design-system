import { Component, ContentChildren, QueryList, inject } from '@angular/core';
import { SideDrawerWarningComponent } from './side-drawer-warning/side-drawer-warning.component';
import { DialogRef } from '@angular/cdk/dialog';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs';

@Component({
  selector: 'lai-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss'],
})
export class SideDrawerComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private dialogRef = inject(DialogRef);

  @ContentChildren(SideDrawerWarningComponent)
  protected warnings!: QueryList<SideDrawerWarningComponent>;

  protected isHandset$ = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => matches));

  protected close(): void {
    this.dialogRef.close();
  }
}
