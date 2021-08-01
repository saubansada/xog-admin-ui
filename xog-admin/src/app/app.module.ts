import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { ForgetpasswordComponent } from './views/forgetpassword/forgetpassword.component';
import { PhoneotpComponent } from './views/phoneotp/phoneotp.component';
import { HomeComponent } from './views/home/home.component';
import { OrdersComponent } from './views/orders/orders.component';
import { ReturnOrdersComponent } from './views/return-orders/return-orders.component';
import { RefundComponent } from './views/refund/refund.component';
import { CustomersComponent } from './views/customers/customers.component';
import { ProductsComponent } from './views/products/products.component';
import { AddProductsComponent } from './views/add-products/add-products.component';
import { ProductsCsvComponent } from './views/products-csv/products-csv.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { AddCategoryComponent } from './views/add-category/add-category.component';
import { SubCategoriesComponent } from './views/sub-categories/sub-categories.component';
import { AddSubComponent } from './views/add-sub/add-sub.component';
import { BrandsComponent } from './views/brands/brands.component';
import { AddBrandsComponent } from './views/add-brands/add-brands.component';
import { OffersComponent } from './views/offers/offers.component';
import { AddOffersComponent } from './views/add-offers/add-offers.component';
import { UsersComponent } from './views/users/users.component';
import { AddUsersComponent } from './views/add-users/add-users.component';
import { PaymentHistoryComponent } from './views/payment-history/payment-history.component';
import { WalletHistoryComponent } from './views/wallet-history/wallet-history.component';
import { PaymentRequestsComponent } from './views/payment-requests/payment-requests.component';
import { AddWalletComponent } from './views/add-wallet/add-wallet.component';
import { FinanceStatsComponent } from './views/finance-stats/finance-stats.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { TopnavComponent } from './components/topnav/topnav.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    NgxDaterangepickerMd.forRoot(),
    FormsModule
  ],
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
    FinanceStatsComponent,
    TopnavComponent,
    LoginComponent,
    ForgetpasswordComponent,
    PhoneotpComponent,
    HomeComponent,
    SidenavbarComponent,
    OrdersComponent,
    ReturnOrdersComponent,
    RefundComponent,
    CustomersComponent,
    ProductsComponent,
    AddProductsComponent,
    ProductsCsvComponent,
    CategoriesComponent,
    AddCategoryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
