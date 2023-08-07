import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';
import { IMAGE_CHECKBOX_GROUP } from '../image-checkbox-group/image-checkbox-group';

@Component({
  selector: 'lai-image-checkbox',
  templateUrl: './image-checkbox.component.html',
  styleUrls: ['./image-checkbox.component.scss'],
})
export class ImageCheckboxComponent<T> implements OnInit, OnDestroy {
  @Input() image!: string;
  @Input() activeImage?: string;
  @Input() label!: string;
  @Input() value!: T;

  @HostBinding('class.checked')
  set checked(value: boolean) {
    this._checked = value;
  }
  get checked(): boolean {
    return this._checked;
  }

  private parent = inject(IMAGE_CHECKBOX_GROUP);
  private dispather = inject(UniqueSelectionDispatcher);

  public id = crypto.randomUUID();

  private _checked = false;
  private isHovered = false;

  private get name(): string {
    return this.parent.name;
  }

  private dispatcherListener!: () => void;

  ngOnInit(): void {
    if (
      this.parent.initValue !== undefined &&
      this.parent.initValue === this.value
    ) {
      this._checked = true;
    }

    this.dispatcherListener = this.dispather.listen((id, name) => {
      if (name === this.name && id !== this.id) {
        this.checked = false;
      }
    });
  }

  get finalImage(): string {
    return this.activeImage
      ? this.checked || this.isHovered
        ? this.activeImage
        : this.image
      : this.image;
  }

  ngOnDestroy(): void {
    this.dispatcherListener();
  }

  @HostListener('click')
  private onClick(): void {
    this.change();
  }

  @HostListener('mouseenter')
  private onMouseEnter(): void {
    this.isHovered = true;
  }

  @HostListener('mouseleave')
  private onMouseLeave(): void {
    this.isHovered = false;
  }

  change(): void {
    this.checked = !this.checked;
    this.dispather.notify(this.id, this.name);
  }
}
