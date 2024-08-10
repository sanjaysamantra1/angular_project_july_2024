import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySort',
  standalone: true,
  pure: false
})
export class MySortPipe implements PipeTransform {

  transform(arr: any) {
    console.log('Sort pipe invoked')
    return arr.sort((a: any, b: any) => a - b);
  }

}
