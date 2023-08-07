import { Pipe, PipeTransform } from '@angular/core';
import { Dictionary, NumericDictionary, PropertyPath, at } from 'lodash';

@Pipe({
  name: 'at',
  standalone: true,
})
export class AtPipe implements PipeTransform {
  transform<T>(
    object: Dictionary<T> | NumericDictionary<T> | null | undefined,
    ...props: PropertyPath[]
  ): T[] {
    return at(object, ...props);
  }
}
