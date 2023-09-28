import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe<T> implements PipeTransform {
  transform<S extends T>(
    value: T[],
    predicate: (value: T, index: number, array: T[]) => value is S,
  ): S[] {
    return value.filter(predicate);
  }
}
