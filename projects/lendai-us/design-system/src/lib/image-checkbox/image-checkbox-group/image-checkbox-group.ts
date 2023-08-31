import { InjectionToken } from '@angular/core';

export interface ImageCheckboxGroup<T> {
  readonly groupName: string;
  readonly hideCheckboxes: boolean;
  readonly initValue?: T;
}

export const IMAGE_CHECKBOX_GROUP = new InjectionToken<
  ImageCheckboxGroup<unknown>
>('_IMAGE_CHECKBOX_GROUP');
