import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword: boolean = false;

  formInstance: FormGroup = this.fb.group({
    UserName: ['', [Validators.required, Validators.email]],
    Password: ['', Validators.required]
  })

  constructor(private fb : FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  visibility() {
    this.showPassword = !this.showPassword;
  }

  submitForm() {
    alert("logging in");
    this.router.navigate(['']);
  }
}

