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
