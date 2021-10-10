import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product, ProductFilter } from '../models/product';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private product_dropdown_url = environment.apiUrl + "/product/get-select-list";
  private add_product_url = environment.apiUrl + "product/add";
  private edit_product_url = environment.apiUrl + "product/edit";
  private get_product_url = environment.apiUrl + "product/get";
  private get_products_url = environment.apiUrl + "product/get-list";
  private delete_product_url = environment.apiUrl + "product/delete";

  constructor(protected apiService: ApiRequestService) {
  }

  public getProductsDropdown(): Observable<any> {
    return this.apiService.get(this.product_dropdown_url);
  }

  public addProductInfo(productInfo: Product): Observable<any> {
    return this.apiService.post(this.add_product_url, productInfo);
  }

  public getProductInfo(id: number): Observable<any> {
    return this.apiService.get(this.get_product_url + "/" + id);
  }

  public editProductInfo(productInfo: Product): Observable<any> {
    return this.apiService.put(this.edit_product_url, productInfo);
  }

  public getProductList(productFilter: ProductFilter): Observable<any> {
    return this.apiService.get(this.get_products_url, productFilter);
  }

  public deleteProduct(productId: number): Observable<any> {
    return this.apiService.delete(this.delete_product_url + "/" + productId);
  }
}
