import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  standalone: true,
})
export class JoinPipe implements PipeTransform {
  transform<T>(value: T[], separator?: string): string {
    return value.join(separator);
  }
}
