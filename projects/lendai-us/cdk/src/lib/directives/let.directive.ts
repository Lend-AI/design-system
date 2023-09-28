import {
  Directive,
  Inject,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[laiLet]',
  standalone: true,
})
export class LetDirective<T> {
  @Input('laiLet') value!: T;

  constructor(
    @Inject(ViewContainerRef) private readonly viewContainer: ViewContainerRef,
    @Inject(TemplateRef)
    private readonly templateRef: TemplateRef<LetContext<T>>,
  ) {
    viewContainer.createEmbeddedView(this.templateRef, new LetContext<T>(this));
  }

  static ngTemplateContextGuard<T>(
    _dir: LetDirective<T>,
    _ctx: unknown,
  ): _ctx is LetContext<T> {
    return true;
  }
}

class LetContext<T> {
  constructor(private readonly internalDirectiveInstance: LetDirective<T>) {}

  get $implicit(): T {
    return this.internalDirectiveInstance.value;
  }

  get laiLet(): T {
    return this.internalDirectiveInstance.value;
  }
}
