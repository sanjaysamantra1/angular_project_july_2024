import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(inputStr: string, limit = 20, completeWords = false, ellipsis = '...') {
    // console.log('Truncate pipe invoked')
    if (completeWords) {
      limit = inputStr.substr(0, limit).lastIndexOf(' ');
    }
    return inputStr.length > limit ? inputStr.substr(0, limit) + ellipsis : inputStr;
  }

}
