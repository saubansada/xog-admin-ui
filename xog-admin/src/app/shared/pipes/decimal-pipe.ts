import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeComma'
})
export class RemoveCommaPipe implements PipeTransform {

  transform(value: string | null): string {
    let str = value != null ? value + "" : "";
    if (value !== undefined && value !== null) {
      return str.replace(/,/g, "");
    } else {
      return "";
    }
  }
}