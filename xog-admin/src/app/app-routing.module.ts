import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PhoneotpComponent } from './components/phoneotp/phoneotp.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'fg', component: ForgetpasswordComponent},
  {path: 'enter-otp', component: PhoneotpComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, ForgetpasswordComponent, PhoneotpComponent, HomeComponent, SidenavbarComponent]
