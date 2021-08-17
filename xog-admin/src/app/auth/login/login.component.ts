import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted: boolean = true;

  loading: boolean = true;

  assetUrl: string = environment.assetsUrl;

  showPassword: boolean = false;

  formInstance: FormGroup = this.fb.group({
    UserName: ['', [Validators.required]],
    Password: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private router: Router,
    private authenticationService: AuthenticationService) { }

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

    this.loading = true;
    this.authenticationService.login(this.email?.value, this.password?.value)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigate(["/"]);
          this.loading = false;
        },
        (error: any) => {
          setTimeout(() => {
            this.loading = false;
          }, 500); 
        });
  }
} 