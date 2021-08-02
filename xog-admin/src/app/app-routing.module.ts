import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandsComponent } from './views/add-brands/add-brands.component';
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
import { HomeComponent } from './views/home/home.component';
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


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: 'subcategory', component: SubCategoriesComponent },
      { path: 'home', component: HomeComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'returns', component: ReturnOrdersComponent },
      { path: 'refunds', component: RefundComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'add-products', component: AddProductsComponent },
      { path: 'upload-csv', component: ProductsCsvComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'add-category', component: AddCategoryComponent },
      { path: 'sub-categories', component: SubCategoriesComponent },
      { path: 'add-sub', component: AddSubComponent },
      { path: 'add-brands', component: AddBrandsComponent },
      { path: 'brands', component: BrandsComponent },
      { path: 'offers', component: OffersComponent },
      { path: 'add-offers', component: AddOffersComponent },
      { path: 'users', component: UsersComponent },
      { path: 'add-users', component: AddUsersComponent },
      { path: 'payment-history', component: PaymentHistoryComponent },
      { path: 'wallet-history', component: WalletHistoryComponent },
      { path: 'payment-request', component: PaymentRequestsComponent },
      { path: 'add-wallet', component: AddWalletComponent },
      { path: 'finance-stats', component: FinanceStatsComponent }
    ]
  },
  {
    path: '', component: AuthLayoutComponent, children: [
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

export const routingComponents = [LoginComponent, ForgetpasswordComponent, PhoneotpComponent, HomeComponent, OrdersComponent, ReturnOrdersComponent, RefundComponent, CustomersComponent, ProductsComponent, TopnavComponent, SidenavbarComponent, AddProductsComponent, ProductsCsvComponent, CategoriesComponent, AddCategoryComponent, SubCategoriesComponent, AddSubComponent, BrandsComponent, AddBrandsComponent, OffersComponent, AddOffersComponent, UsersComponent, AddUsersComponent, PaymentHistoryComponent, PaymentRequestsComponent, WalletHistoryComponent, AddWalletComponent, FinanceStatsComponent]
