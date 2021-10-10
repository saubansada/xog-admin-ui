import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { PhoneotpComponent } from './auth/phoneotp/phoneotp.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
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
import { AddBrandComponent } from './views/add-brand/add-brand.component';
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
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './auth/_helpers/jwt.interceptor';
import { ErrorInterceptor } from './auth/_helpers/error.interceptor';
import { SharedModule } from './shared/shared.module';
import { ProductGroupsComponent } from './views/product-group/product-groups.component';
import { AddProductGroupComponent } from './views/add-product-group/add-prodouct-group.component';
import { SettingsComponent } from './views/settings/settings.component'; 
import { QuantityMeasuresComponent } from './views/settings/quantity-measures/quantity-measures.component';
import { SettingDefaultComponent } from './views/settings/setting-default/setting-default.component';
import { SettingsNavComponent } from './views/settings/settings-nav/settings-nav.component';
import { TaxesComponent } from './views/settings/taxes/taxes.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    BrowserAnimationsModule,
    NgxDaterangepickerMd.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    routingComponents,
    SubCategoriesComponent,
    AddSubComponent,
    BrandsComponent,
    AddBrandComponent,
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
    DashboardComponent,
    SidenavbarComponent,
    OrdersComponent,
    ReturnOrdersComponent,
    RefundComponent,
    CustomersComponent,
    ProductsComponent,
    AddProductsComponent,
    ProductsCsvComponent,
    CategoriesComponent,
    AddCategoryComponent,
    MainLayoutComponent,
    AuthLayoutComponent,
    ProductGroupsComponent,
    AddProductGroupComponent,
    SettingsComponent,
    QuantityMeasuresComponent,
    SettingDefaultComponent,
    SettingsNavComponent,
    TaxesComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
