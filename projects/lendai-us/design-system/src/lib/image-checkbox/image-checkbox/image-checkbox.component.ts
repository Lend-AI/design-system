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
  protected checked = false;

  id = crypto.randomUUID();

  private dispatcherListener!: () => void;

  private parent = inject(IMAGE_CHECKBOX_GROUP);
  private dispather = inject(UniqueSelectionDispatcher);

  private isHovered = false;

  protected get finalImage(): string {
    return this.activeImage
      ? this.checked || this.isHovered
        ? this.activeImage
        : this.image
      : this.image;
  }

  protected get hideCheckboxes(): boolean {
    return this.parent.hideCheckboxes;
  }

  private get groupName(): string {
    return this.parent.groupName;
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

  ngOnInit(): void {
    if (
      this.parent.initValue !== undefined &&
      this.parent.initValue === this.value
    ) {
      this.checked = true;
    }

    this.dispatcherListener = this.dispather.listen((id, name) => {
      if (name === this.groupName && id !== this.id) {
        this.checked = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.dispatcherListener();
  }

  protected change(): void {
    this.checked = !this.checked;
    this.dispather.notify(this.id, this.groupName);
  }
}
