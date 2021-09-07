import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private product_dropdown_url = environment.api_url + "products/get-dropdown"; 
  private save_product_url = environment.api_url + "products/save-product";
  private get_products_url = environment.api_url + "products/get-products"; 
  private delete_product_url = environment.api_url + "products/delete-product";
  
  constructor(protected apiService:  ApiRequestService) { 
  }
  //saveProductInfo
  public getProductsDropdown(): Observable<any>{
    return this.apiService.get(this.product_dropdown_url);
  }
 
  public saveProductInfo(productInfo): Observable<any> {
    return this.apiService.post(this.save_product_url, productInfo);
  }
 
  public getProductList(productfilter): Observable<any> {
    return this.apiService.get(this.get_products_url, productfilter);
  }
  
  public deleteProduct(deleteInfo): Observable<any> {
    return this.apiService.delete(this.delete_product_url, deleteInfo);
  }
}
