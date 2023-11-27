import { Pipe, PipeTransform } from '@angular/core';

const UNITS = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB'] as const;

type Unit = (typeof UNITS)[number];
type UnitPrecisionMap = Record<Unit, number>;

@Pipe({
  name: 'fileSize',
  standalone: true,
})
export class FileSizePipe implements PipeTransform {
  transform(
    bytes = 0,
    precision: number | UnitPrecisionMap = DEFAULT_PRECISION_MAP,
  ): string {
    if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) return '?';

    let unitIndex = 0;

    while (bytes >= 1024) {
      bytes /= 1024;
      unitIndex++;
    }

    const unit = UNITS[unitIndex];

    if (typeof precision === 'number') {
      return `${bytes.toFixed(+precision)} ${unit}`;
    }
    return `${bytes.toFixed(precision[unit])} ${unit}`;
  }
}

const DEFAULT_PRECISION_MAP: UnitPrecisionMap = {
  bytes: 0,
  KB: 0,
  MB: 1,
  GB: 1,
  TB: 2,
  PB: 2,
};
