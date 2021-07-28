import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PhoneotpComponent } from './components/phoneotp/phoneotp.component';
import { ProductsComponent } from './components/products/products.component';
import { RefundComponent } from './components/refund/refund.component';
import { ReturnOrdersComponent } from './components/return-orders/return-orders.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { TopnavComponent } from './components/topnav/topnav.component';


const routes: Routes = [
  {path: '', component: ProductsComponent },
  {path: 'login', component: LoginComponent},
  {path: 'fg', component: ForgetpasswordComponent},
  {path: 'enter-otp', component: PhoneotpComponent},
  {path: 'home', component: HomeComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'returns', component: ReturnOrdersComponent },
  {path: 'refunds', component: RefundComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, ForgetpasswordComponent, PhoneotpComponent, HomeComponent, OrdersComponent,  ReturnOrdersComponent, RefundComponent, CustomersComponent, ProductsComponent, TopnavComponent, SidenavbarComponent]
