import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, Subject, of } from 'rxjs';
import { catchError, map, retryWhen, tap } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';
import { ErrorInterceptorService } from 'src/app/shared/services/error-interceptor.service';
import { Result } from 'src/app/models/common';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private authenticationService: AuthenticationService,
        private _router: Router,
        private errorIntrcptr: ErrorInterceptorService) { }
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(this.handleError<any>()))
    }

    private handleError<T>(operation = 'operation', result?: T) {

        return (error: any): Observable<T> => {


            if (error.status === 401) {

                this.authenticationService.logout();

                this._router.navigate(['/auth/login']);

                this.errorIntrcptr.httpErrorOccurred.next({Message: "Please login to continue..", Result: Result.ValidationError });
            }
            else if (error.status == 400) {
                let msg = "The request is Invalid";
                if(error.error != null 
                    && error.error.message != null 
                    && error.error.message.trim() != ""){

                    msg = error.error.message;
                } else if(error.error.error_description != null){
                    msg = error.error.error_description;
                }
                this.errorIntrcptr.httpErrorOccurred.next({Message: msg, Result: Result.Failure });
            }
            else if (error.status == 500) {
                this.errorIntrcptr.httpErrorOccurred.next({Message: "Error occurred in the server", Result: Result.Error });
            } 
            else if (error.status == 0) {
                this.errorIntrcptr.httpErrorOccurred.next({Message: "Unable to connect the server", Result: Result.Error });
            }
            else {
                this.errorIntrcptr.httpErrorOccurred.next({Message: "Unknown Error", Result: Result.Error });
            }

            console.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        };
    }
}