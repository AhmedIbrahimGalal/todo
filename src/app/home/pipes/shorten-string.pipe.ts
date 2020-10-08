import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenString'
})
export class ShortenStringPipe implements PipeTransform {

  transform(value: any): any {

    let widthWindow = window.innerWidth;

    if(widthWindow <= 800) {
      if(value.length >= 10) {
        value = value.split('');
        value.length = 10;
        let newValue = '...' + value.join('');
        return newValue;
      } else {
        return value;
      }
    } else {
      if(value.length >= 30) {
        value = value.split('');
        value.length = 30;
        let newValue = '...' + value.join('');
        return newValue;
      } else {
        return value;
      }
    }
  }

}
