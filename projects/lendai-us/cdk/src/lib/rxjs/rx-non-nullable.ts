import { filter, Observable, OperatorFunction } from 'rxjs';
import { nonNullable } from '../utility';

export function rxNonNullable<T>(): OperatorFunction<T, NonNullable<T>> {
  return function (source$: Observable<T>): Observable<NonNullable<T>> {
    return source$.pipe(filter(nonNullable));
  };
}
