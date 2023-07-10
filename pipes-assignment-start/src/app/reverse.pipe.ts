import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(status: string): any {
    let charArr = status.split('');
    charArr = charArr.reverse();
    return charArr.join('');
  }

}
