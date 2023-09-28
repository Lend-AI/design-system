import { Component, ContentChildren, QueryList } from '@angular/core';
import { SideDrawerWarningComponent } from './side-drawer-warning/side-drawer-warning.component';
import { DialogRef } from '@angular/cdk/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs';
import { Breakpoints } from '../foundations';

@Component({
  selector: 'lai-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss'],
})
export class SideDrawerComponent {
  @ContentChildren(SideDrawerWarningComponent)
  protected warnings!: QueryList<SideDrawerWarningComponent>;

  protected isHandset$ = this.breakpointObserver
    .observe(Breakpoints.mobile)
    .pipe(map(({ matches }) => matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialogRef: DialogRef,
  ) {}

  protected close(): void {
    this.dialogRef.close();
  }
}
