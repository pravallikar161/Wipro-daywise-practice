import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'centitofahren',
})
export class CentitofahrenPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return (value * 9) / 5 + 32 + 'F';
  }
}
