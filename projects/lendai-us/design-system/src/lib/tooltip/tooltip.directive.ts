import {
  ComponentRef,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  HostListener,
  Inject,
  Injector,
  Input,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { DOCUMENT } from '@angular/common';
import { TooltipStyle } from './tooltip.models';

@Directive({
  selector: '[laiTooltip]',
})
export class TooltipDirective implements OnDestroy {
  @Input() laiTooltip!: string;
  @Input() style: TooltipStyle = 'dark';

  private tooltipRef: ComponentRef<TooltipComponent> | null = null;

  constructor(
    private readonly injector: Injector,
    private readonly vcRef: ViewContainerRef,
    private readonly elRef: ElementRef,
    @Inject(DOCUMENT) private readonly document: Document,
  ) {}

  @HostListener('mouseenter')
  private onMouseEnter(): void {
    if (this.tooltipRef) {
      return;
    }

    this.tooltipRef = this.vcRef.createComponent(TooltipComponent, {
      injector: this.injector,
    });
    const domElem = (this.tooltipRef.hostView as EmbeddedViewRef<unknown>)
      .rootNodes[0] as HTMLElement;
    this.document.body.appendChild(domElem);
    this.setTooltipProperties(this.tooltipRef.instance);
  }

  @HostListener('mouseleave')
  private onMouseLeave(): void {
    this.destroy();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  private destroy(): void {
    if (!this.tooltipRef) {
      return;
    }
    this.tooltipRef.destroy();
    this.tooltipRef = null;
  }

  private setTooltipProperties(instance: TooltipComponent): void {
    const { left, right, bottom } =
      this.elRef.nativeElement.getBoundingClientRect();
    instance.tooltip = this.laiTooltip;
    instance.style = this.style;
    instance.left = (right - left) / 2 + left;
    instance.top = bottom;
  }
}
