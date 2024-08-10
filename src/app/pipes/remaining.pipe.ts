import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  standalone: true,
  pure: false
})
export class RemainingPipe implements PipeTransform {
  transform(input: any, maxLength = 100) {
    // console.log('RemainingPipe invoked')
    return maxLength - input.length;
  }
}
