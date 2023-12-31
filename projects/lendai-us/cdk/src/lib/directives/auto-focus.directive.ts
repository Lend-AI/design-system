import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[laiAutoFocus]',
  standalone: true,
})
export class AutoFocusDirective implements AfterContentInit {
  private _isFocused = false;

  constructor(private readonly elRef: ElementRef) {}

  @Input('laiAutoFocus')
  get isFocused(): boolean {
    return this._isFocused;
  }
  set isFocused(value: BooleanInput) {
    this._isFocused = coerceBooleanProperty(value);
  }

  ngAfterContentInit(): void {
    this.elRef.nativeElement.focus();
  }
}
