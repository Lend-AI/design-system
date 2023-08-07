import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[laiHidden]',
  standalone: true,
})
export class HiddenDirective implements OnChanges, AfterViewInit {
  @Input('laiHidden')
  get isHidden(): boolean {
    return this._isHidden;
  }
  set isHidden(value: BooleanInput) {
    this._isHidden = coerceBooleanProperty(value);
  }

  private _isHidden = false;

  constructor(
    private readonly elRef: ElementRef,
    private readonly rendered: Renderer2
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['isHidden'].firstChange) {
      this.setDisplay();
    }
  }

  ngAfterViewInit(): void {
    this.setDisplay();
  }

  private setDisplay(): void {
    if (this._isHidden) {
      this.rendered.setStyle(this.elRef.nativeElement, 'display', 'none');
    } else {
      this.rendered.removeStyle(this.elRef.nativeElement, 'display');
    }
  }
}
