import {
  Component,
  HostBinding,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription, map } from 'rxjs';
import { CLEAN_LAYOUT_SERVICE } from '../clean-layout.service';

@Component({
  selector: 'lai-clean-layout-left',
  templateUrl: './clean-layout-left.component.html',
  styleUrls: ['./clean-layout-left.component.scss'],
})
export class CleanLayoutLeftComponent implements OnInit, OnDestroy {
  protected readonly service = inject(CLEAN_LAYOUT_SERVICE);
  private readonly sub$ = new Subscription();

  @Input() background!: string;
  @Input() title?: string;
  logoPath!: string;

  ngOnInit(): void {
    this.sub$.add(
      this.service.logoPath$.subscribe(logoPath => (this.logoPath = logoPath))
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  private readonly breakpointObserver = inject(BreakpointObserver);
  readonly isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(({ matches }) => matches));

  @HostBinding('style.background-image')
  get backgroundImage(): string {
    return `url(assets/images/${this.background})`;
  }
}
