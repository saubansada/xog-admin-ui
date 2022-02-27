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
import { DeliveryChargesComponent } from './views/settings/delivery-charges/delivery-charges.component';
import { OrderDetailsComponent } from './views/order-details/order-details.component';
import { ManageSharedComponent } from './views/manage-shared/manage-shared.component';
import { ManageHomeBannerComponent } from './views/manage-home-banner/manage-home-banner.component';
import { ManageFeaturedListComponent } from './views/manage-featured-list/manage-featured-list.component';
import { ManageTopBrandsComponent } from './views/manage-top-brands/manage-top-brands.component';
import { ManageMobileComponent } from './views/manage-mobile/manage-mobile.component';
import { SliderBannersComponent } from './views/slider-banners/slider-banners.component';
import { AddSliderBannerComponent } from './views/add-slider-banner/add-slider-banner.component';
import { MobileCustomOfferComponent } from './views/mobile-custom-offer/mobile-custom-offer.component';
import { ManageDesktopComponent } from './views/manage-desktop/manage-desktop.component';
import { FourBannersComponent } from './views/four-banners/four-banners.component';
import { AddFourbannersComponent } from './views/add-fourbanners/add-fourbanners.component';
import { OfferListsComponent } from './views/offer-lists/offer-lists.component';
import { AddOfferListComponent } from './views/add-offer-list/add-offer-list.component';
import { DeliveryTimingsComponent } from './views/settings/delivery-timings/delivery-timings.component';
import { TimingDetailsComponent } from './views/settings/timing-details/timing-details.component';
import { ReportsComponent } from './desktop/views/reports/reports.component';
import { CustomerOrderComponent } from './desktop/reports/customer-order/customer-order.component';
import { SalesReportsComponent } from './desktop/reports/sales-reports/sales-reports.component';
import { ProductReportsComponent } from './desktop/reports/product-reports/product-reports.component';
import { CustomerReportsComponent } from './desktop/reports/customer-reports/customer-reports.component';
import { BrandReportsComponent } from './desktop/reports/brand-reports/brand-reports.component';
import { TransReportsComponent } from './desktop/reports/trans-reports/trans-reports.component';
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
    TaxesComponent,
    DeliveryChargesComponent,
    OrderDetailsComponent,
    ManageSharedComponent,
    ManageHomeBannerComponent,
    ManageFeaturedListComponent,
    ManageTopBrandsComponent,
    ManageMobileComponent,
    SliderBannersComponent,
    AddSliderBannerComponent,
    MobileCustomOfferComponent,
    ManageDesktopComponent,
    FourBannersComponent,
    AddFourbannersComponent,
    OfferListsComponent,
    AddOfferListComponent,
    DeliveryTimingsComponent,
    TimingDetailsComponent,
    ReportsComponent,
    CustomerOrderComponent,
    SalesReportsComponent,
    ProductReportsComponent,
    CustomerReportsComponent,
    BrandReportsComponent,
    TransReportsComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
