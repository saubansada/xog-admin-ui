import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { first } from 'rxjs/operators';
import { BaseComponent } from 'src/app/shared/base.component';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  submitted: boolean = true;

  assetUrl: string = environment.assetsUrl;

  showPassword: boolean = false;

  formInstance: FormGroup = this.fb.group({
    UserName: ['', [Validators.required]],
    Password: ['', Validators.required]
  })

  constructor(protected injector: Injector,
    private authenticationService: AuthenticationService) {
    super(injector);
  }

  ngOnInit(): void {
  }

  get email() {
    return this.formInstance.get('UserName');
  }

  get password() {
    return this.formInstance.get('Password');
  }

  visibility() {
    this.showPassword = !this.showPassword;
  }

  submitForm() {
    this.router.navigate(['/admin']);

    this.submitted = true;

    if (this.formInstance.invalid) {
      return;
    }

    this.showFullSpinner();
    this.authenticationService.login(this.email?.value, this.password?.value)
      .pipe(first())
      .subscribe(
        () => {
          this.hideFullSpinner();
          this.router.navigate(["/"]);
        },
        (error: any) => {
          setTimeout(() => {
            this.hideFullSpinner();
            this.spinner.hide();
          }, 500);
        });
  }
}