import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandsComponent } from './components/add-brands/add-brands.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AddOffersComponent } from './components/add-offers/add-offers.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AddSubComponent } from './components/add-sub/add-sub.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { AddWalletComponent } from './components/add-wallet/add-wallet.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CustomersComponent } from './components/customers/customers.component';
import { FinanceStatsComponent } from './components/finance-stats/finance-stats.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OffersComponent } from './components/offers/offers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import { PaymentRequestsComponent } from './components/payment-requests/payment-requests.component';
import { PhoneotpComponent } from './components/phoneotp/phoneotp.component';
import { ProductsCsvComponent } from './components/products-csv/products-csv.component';
import { ProductsComponent } from './components/products/products.component';
import { RefundComponent } from './components/refund/refund.component';
import { ReturnOrdersComponent } from './components/return-orders/return-orders.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { UsersComponent } from './components/users/users.component';
import { WalletHistoryComponent } from './components/wallet-history/wallet-history.component';


const routes: Routes = [
  {path: '', component: SubCategoriesComponent },
  {path: 'login', component: LoginComponent},
  {path: 'fg', component: ForgetpasswordComponent},
  {path: 'enter-otp', component: PhoneotpComponent},
  {path: 'home', component: HomeComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'returns', component: ReturnOrdersComponent },
  {path: 'refunds', component: RefundComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'add-products', component : AddProductsComponent},
  {path: 'upload-csv', component : ProductsCsvComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'add-category',  component: AddCategoryComponent},
  {path: 'sub-categories', component: SubCategoriesComponent},
  {path: 'add-sub', component: AddSubComponent},
  {path: 'add-brands', component: AddBrandsComponent},
  {path: 'brands', component: BrandsComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'add-offers', component: AddOffersComponent},
  {path: 'users', component: UsersComponent},
  {path: 'add-users', component: AddUsersComponent},
  {path: 'payment-history', component: PaymentHistoryComponent},
  {path: 'wallet-history', component: WalletHistoryComponent},
  {path: 'payment-request', component: PaymentRequestsComponent},
  {path: 'add-wallet', component: AddWalletComponent},
  {path: 'finance-stats', component: FinanceStatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, ForgetpasswordComponent, PhoneotpComponent, HomeComponent, OrdersComponent,  ReturnOrdersComponent, RefundComponent, CustomersComponent, ProductsComponent, TopnavComponent, SidenavbarComponent, AddProductsComponent, ProductsCsvComponent, CategoriesComponent, AddCategoryComponent, SubCategoriesComponent, AddSubComponent, BrandsComponent, AddBrandsComponent, OffersComponent, AddOffersComponent, UsersComponent, AddUsersComponent, PaymentHistoryComponent, PaymentRequestsComponent, WalletHistoryComponent, AddWalletComponent, FinanceStatsComponent]
