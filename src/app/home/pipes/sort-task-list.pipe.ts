import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTaskList'
})
export class SortTaskListPipe implements PipeTransform {

  transform(value: any): any {

    let newArr:Array<object> = [];

    if(value != null) {
      newArr =  value.sort(function(a, b) {
        var dateA = new Date(a.createdDate), dateB = new Date(b.createdDate);
        return Number(dateB) - Number(dateA);
    });
      return newArr;
    } else {
      return value;
    }


  }

}
