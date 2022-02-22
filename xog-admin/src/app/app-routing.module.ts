import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandComponent } from './views/add-brand/add-brand.component';
import { AddCategoryComponent } from './views/add-category/add-category.component';
import { AddOffersComponent } from './views/add-offers/add-offers.component';
import { AddProductsComponent } from './views/add-products/add-products.component';
import { AddSubComponent } from './views/add-sub/add-sub.component';
import { AddUsersComponent } from './views/add-users/add-users.component';
import { AddWalletComponent } from './views/add-wallet/add-wallet.component';
import { BrandsComponent } from './views/brands/brands.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { CustomersComponent } from './views/customers/customers.component';
import { FinanceStatsComponent } from './views/finance-stats/finance-stats.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { OffersComponent } from './views/offers/offers.component';
import { OrdersComponent } from './views/orders/orders.component';
import { PaymentHistoryComponent } from './views/payment-history/payment-history.component';
import { PaymentRequestsComponent } from './views/payment-requests/payment-requests.component';
import { PhoneotpComponent } from './auth/phoneotp/phoneotp.component';
import { ProductsCsvComponent } from './views/products-csv/products-csv.component';
import { ProductsComponent } from './views/products/products.component';
import { RefundComponent } from './views/refund/refund.component';
import { ReturnOrdersComponent } from './views/return-orders/return-orders.component';
import { SubCategoriesComponent } from './views/sub-categories/sub-categories.component';
import { UsersComponent } from './views/users/users.component';
import { WalletHistoryComponent } from './views/wallet-history/wallet-history.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RoleGuardService } from './auth/_helpers/role.guard';
import { Role } from './auth/_models/role';
import { ProductGroupsComponent } from './views/product-group/product-groups.component';
import { AddProductGroupComponent } from './views/add-product-group/add-prodouct-group.component';
import { SettingsComponent } from './views/settings/settings.component';
import { QuantityMeasuresComponent } from './views/settings/quantity-measures/quantity-measures.component';
import { SettingDefaultComponent } from './views/settings/setting-default/setting-default.component';
import { TaxesComponent } from './views/settings/taxes/taxes.component';
import { DeliveryChargesComponent } from './views/settings/delivery-charges/delivery-charges.component';
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

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    canActivate: [RoleGuardService],
    data: { roles: [Role.Admin] },
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', redirectTo: '' },
      { path: 'orders', component: OrdersComponent },
      { path: 'returns', component: ReturnOrdersComponent },
      { path: 'refunds', component: RefundComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/add', component: AddProductsComponent },
      { path: 'products/edit/:id', component: AddProductsComponent },
      { path: 'upload-csv', component: ProductsCsvComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'categories/add', component: AddCategoryComponent },
      { path: 'categories/edit/:id', component: AddCategoryComponent },
      { path: 'sub-categories', component: SubCategoriesComponent },
      { path: 'sub-categories/add', component: AddSubComponent },
      { path: 'sub-categories/edit/:id', component: AddSubComponent },
      { path: 'product-groups', component: ProductGroupsComponent },
      { path: 'product-groups/add', component: AddProductGroupComponent },
      { path: 'product-groups/edit/:id', component: AddProductGroupComponent },
      { path: 'brands', component: BrandsComponent },
      { path: 'brands/add', component: AddBrandComponent },
      { path: 'brands/edit/:id', component: AddBrandComponent },
      { path: 'offers', component: OffersComponent },
      { path: 'add-offers', component: AddOffersComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/add', component: AddUsersComponent },
      { path: 'users/edit/:id', component: AddUsersComponent },
      { path: 'payment-history', component: PaymentHistoryComponent },
      { path: 'wallet-history', component: WalletHistoryComponent },
      { path: 'payment-request', component: PaymentRequestsComponent },
      { path: 'add-wallet', component: AddWalletComponent },
      { path: 'finance', component: FinanceStatsComponent },
      { path: 'finance-stats', component: FinanceStatsComponent },
      { path: 'manage-shared', component: ManageSharedComponent },
      { path: 'manage-homebanner', component: ManageHomeBannerComponent },
      {path: 'featured-lists', component: ManageFeaturedListComponent},
      {path: 'manage-topbrands', component: ManageTopBrandsComponent},
      {path: 'manage-mobile', component: ManageMobileComponent},
      {path: 'slider-banner', component: SliderBannersComponent},
      {path: 'add-sliderbanner', component: AddSliderBannerComponent},
      {path: 'mobile-custom-offer', component: MobileCustomOfferComponent},
      {path: 'manage-desktop', component: ManageDesktopComponent},
      {path: 'four-banners', component: FourBannersComponent},
      {path: 'add-fourbanners', component: AddFourbannersComponent},
      {path: 'offerlists', component: OfferListsComponent},
      {path: 'add-offerlists', component: AddOfferListComponent},

      {path: 'timing-details', component: TimingDetailsComponent},
      {
        path: 'settings', component: SettingsComponent,
        children: [
          { path: '', component: SettingDefaultComponent },
          {
            path: 'quantity-measures', component: QuantityMeasuresComponent,
            children: [
              { path: 'add', component: QuantityMeasuresComponent },
              { path: 'edit/:id', component: QuantityMeasuresComponent }
            ]
          },
          { path: 'delivery-charges', component: DeliveryChargesComponent },

      {path: 'delivery-timings', component: DeliveryTimingsComponent},
          {
            path: 'taxes', component: TaxesComponent
          },
        ]
      },
      {
        path: '**', redirectTo: '/auth/login'
      }
    ]
  },
  {
    path: 'auth', component: AuthLayoutComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: "full" },
      { path: 'login', component: LoginComponent },
      { path: 'forgetpassword', component: ForgetpasswordComponent },
      { path: 'enter-otp', component: PhoneotpComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, ForgetpasswordComponent, PhoneotpComponent, DashboardComponent, OrdersComponent, ReturnOrdersComponent, RefundComponent, CustomersComponent, ProductsComponent, TopnavComponent, SidenavbarComponent, AddProductsComponent, ProductsCsvComponent, CategoriesComponent, AddCategoryComponent, SubCategoriesComponent, AddSubComponent, BrandsComponent, AddBrandComponent, OffersComponent, AddOffersComponent, UsersComponent, AddUsersComponent, PaymentHistoryComponent, PaymentRequestsComponent, WalletHistoryComponent, AddWalletComponent, FinanceStatsComponent]
