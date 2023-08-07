import { Pipe, PipeTransform } from '@angular/core';
import { at } from 'lodash';

@Pipe({
  name: 'at',
  standalone: true,
})
export class AtPipe implements PipeTransform {
  transform(...params: Parameters<typeof at>): ReturnType<typeof at> {
    return at(...params);
  }
}
