import {
  AfterContentInit,
  Component,
  Input,
  Optional,
  Self,
  inject,
} from '@angular/core';
import {
  IMAGE_CHECKBOX_GROUP,
  ImageCheckboxGroup,
} from './image-checkbox-group';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { ContentChildren } from '@angular/core';
import { QueryList } from '@angular/core';
import { ImageCheckboxComponent } from '../image-checkbox/image-checkbox.component';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UniqueSelectionDispatcher } from '@angular/cdk/collections';

@Component({
  selector: 'lai-image-checkbox-group',
  templateUrl: './image-checkbox-group.component.html',
  styleUrls: ['./image-checkbox-group.component.scss'],
  providers: [
    { provide: IMAGE_CHECKBOX_GROUP, useExisting: ImageCheckboxGroupComponent },
  ],
})
export class ImageCheckboxGroupComponent<T>
  implements
    ControlValueAccessor,
    ImageCheckboxGroup<T>,
    AfterContentInit,
    OnDestroy
{
  @Input() hideCheckboxes = false;

  @ContentChildren(ImageCheckboxComponent)
  checkboxes!: QueryList<ImageCheckboxComponent<T>>;

  groupName = crypto.randomUUID();
  initValue?: T;
  onChange!: (value: unknown) => void;
  onTouched!: () => void;

  private dispather = inject(UniqueSelectionDispatcher);

  private readonly sub$ = new Subscription();

  constructor(@Optional() @Self() public readonly ngControl?: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngAfterContentInit(): void {
    this.dispather.listen((checkboxId, groupName) => {
      if (groupName !== this.groupName) {
        return;
      }

      const checkbox = this.checkboxes.find(
        checkbox => checkbox.id === checkboxId
      );
      if (!checkbox) {
        throw new Error(`Cannot find checkbox with id ${checkboxId}`);
      }

      const newValue =
        checkbox.value === this.ngControl?.value ? null : checkbox.value;
      this.onChange(newValue);
    });
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  writeValue(obj: T): void {
    this.initValue = obj;
  }
  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.registerOnTouched = fn;
  }
}
