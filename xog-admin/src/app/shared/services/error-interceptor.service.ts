import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ResponseObject } from 'src/app/models/common';

export enum DrawerFor {
    Navigation = 1,
}

@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptorService {
 
    public httpErrorOccurred = new Subject<ResponseObject<any>>();

    public httpError$ = this.httpErrorOccurred.asObservable();

}
