import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { PhoneotpComponent } from './components/phoneotp/phoneotp.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ReturnOrdersComponent } from './components/return-orders/return-orders.component';
import { RefundComponent } from './components/refund/refund.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CustomersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    NgxDaterangepickerMd.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
