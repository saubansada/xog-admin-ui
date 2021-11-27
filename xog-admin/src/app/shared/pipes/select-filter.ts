import { Component, NgModule, Pipe, PipeTransform } from '@angular/core'
import { AbstractControl, FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

@Pipe({
    name: 'filterId'
})

export class SelectFilterPipe implements PipeTransform {
    transform(list: any[], val: any, control?: AbstractControl | null): any {

        var filteredList = (list != null && list.length > 0) ? list.filter(opt => val == -1 || opt.Extras.FilterId == val) : list;

        if (control != null && filteredList.length > 0 && filteredList.findIndex(i => i.Value == control?.value) == -1) {
            control?.patchValue(-1);
        }
        return filteredList;
    }
}