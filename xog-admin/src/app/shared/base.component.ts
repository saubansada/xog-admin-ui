import { FormBuilder, FormGroup } from "@angular/forms";
import { OnDestroy, OnInit, Injector, Directive, Component, inject } from "@angular/core";
import { ErrorInterceptor } from "../auth/_helpers/error.interceptor";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of, Subscription } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ErrorInterceptorService } from "./services/error-interceptor.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from '../auth/_services/authentication.service';
import { NgxSpinnerService } from "ngx-spinner";
import { NotifierService } from "angular-notifier";
import { ResponseObject, Result } from "../models/common";
import { ApiRequestService } from "../services/api-request.service";

declare var UIkit: any;

@Component({
    template: ''
})
export class BaseComponent implements OnDestroy {

    public messageShown: boolean = false;

    public shouldShowSpinner: boolean;

    protected subscription!: Subscription;

    protected hasBottomNavigation: boolean = true;

    protected baseUrl: string = environment.apiUrl;

    loading: boolean = false;

    dayjsOptions: any = {
        autoApply: false,
        alwaysShowCalendars: false,
        showCancel: false,
        showClearButton: false,
        linkedCalendars: true,
        singleDatePicker: false,
        showWeekNumbers: false,
        showISOWeekNumbers: false,
        customRangeDirection: false,
        lockStartDate: false,
        closeOnAutoApply: true
    };

    loadSpinner: string = "loadSpinner";

    protected fb!: FormBuilder;
    protected http: HttpClient;
    protected router: Router;
    protected errorIntrcptr: ErrorInterceptorService;
    protected auth: AuthenticationService;
    protected spinner: NgxSpinnerService;
    protected route: ActivatedRoute;
    protected notifierService: NotifierService;
    protected apiRequestService: ApiRequestService;

    constructor(protected injector: Injector) {

        this.fb = injector.get(FormBuilder);
        this.http = injector.get(HttpClient);
        this.router = injector.get(Router);
        this.errorIntrcptr = injector.get(ErrorInterceptorService);
        this.auth = injector.get(AuthenticationService);
        this.spinner = injector.get(NgxSpinnerService);
        this.route = injector.get(ActivatedRoute);
        this.notifierService = injector.get(NotifierService);
        this.apiRequestService = injector.get(ApiRequestService);
        this.shouldShowSpinner = true;


        console.log("Subscribing the Interceptor");
        this.subscription = this.apiRequestService.onMessage$.subscribe(res => {
            this.loading = false;
            this.showMessage(res);
        })

        this.apiRequestService.onAsyncStatus$.subscribe(res => {
            if (res && this.shouldShowSpinner) {
                this.showSpinner();
            }
            else {
                if (this.shouldShowSpinner) {
                    this.hideSpinner();
                }
            }
        })
    }

    showMessage(res: ResponseObject<any>) {

        setTimeout(() => {
            this.messageShown = false;
        }, 3000);

        if (this.messageShown == false) {

            this.messageShown = true;
            if (res.Message != null && res.Message.trim() != "") {
                this.notifierService.notify(
                    res.Result == Result.Success ? 'success' :
                        ((res.Result == Result.Failure || res.Result == Result.ValidationError) ? 'warning'
                            : 'error')
                    , res.Message);
            }
        }
    }

    resetForm(form: FormGroup) {
        form.reset();
        form.markAsPristine();
        form.markAsUntouched();
    }

    ngOnDestroy() {
        if (this.subscription) {
            console.log("UnSubscribing the Interceptor")
            this.subscription.unsubscribe();
        }
        this.http = <any>null;
        this.router = <any>null;
        this.errorIntrcptr = <any>null;
    }

    // showMessageBox(title: string, message: string, type: "Ok" | "Cancel" | "Close"): Observable<any> {

    //     // const dialogRef = this.dialog.open(MessageDialogComponent, {
    //     //     restoreFocus: false,
    //     //     width: '250px',
    //     //     data: { title, message, type }
    //     // });

    //     return dialogRef.afterClosed();
    // }

    showModal(name: string) {
        setTimeout(() => {
            UIkit.modal(name).show();
        }, 0);
    }

    hideModal(name: string) {
        setTimeout(() => {
            UIkit.modal(name).hide();
        }, 0);
    }

    showSpinner(loadSpinner?: string) {
        if (loadSpinner == null) loadSpinner = this.loadSpinner;
        this.spinner.show(loadSpinner, {
            type: "ball-atom", //"square-jelly-box",
            size: "medium",
            bdColor: "rgba(0, 0, 0, 0.4)",
            color: "white",
            fullScreen: false
        });
    }

    hideSpinner(loadSpinner?: string) {
        if (loadSpinner == null) loadSpinner = this.loadSpinner;
        this.spinner.hide(this.loadSpinner);
    }

    showFullSpinner() {
        this.spinner.show();
    }

    hideFullSpinner() {
        this.spinner.hide();
    }
}