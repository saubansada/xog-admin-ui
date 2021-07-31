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
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ProductsCsvComponent } from './components/products-csv/products-csv.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { AddSubComponent } from './components/add-sub/add-sub.component';
import { BrandsComponent } from './components/brands/brands.component';
import { AddBrandsComponent } from './components/add-brands/add-brands.component';
import { OffersComponent } from './components/offers/offers.component';
import { AddOffersComponent } from './components/add-offers/add-offers.component';
import { UsersComponent } from './components/users/users.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import { WalletHistoryComponent } from './components/wallet-history/wallet-history.component';
import { PaymentRequestsComponent } from './components/payment-requests/payment-requests.component';
import { AddWalletComponent } from './components/add-wallet/add-wallet.component';
import { FinanceStatsComponent } from './components/finance-stats/finance-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SubCategoriesComponent,
    AddSubComponent,
    BrandsComponent,
    AddBrandsComponent,
    OffersComponent,
    AddOffersComponent,
    UsersComponent,
    AddUsersComponent,
    PaymentHistoryComponent,
    WalletHistoryComponent,
    PaymentRequestsComponent,
    AddWalletComponent,
    FinanceStatsComponent
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
