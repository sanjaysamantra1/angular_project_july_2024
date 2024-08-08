import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  standalone: true
})
export class RemainingPipe implements PipeTransform {
  transform(input: any, maxLength = 100) {
    return maxLength - input.length;
  }
}
