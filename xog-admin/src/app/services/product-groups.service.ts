import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductGroup, ProductGroupFilter } from '../models/product-group';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProductGroupsService {

  private productgroup_dropdown_url = environment.apiUrl + "/productgroup/get-select-list";
  private add_productgroup_url = environment.apiUrl + "productgroup/add";
  private edit_productgroup_url = environment.apiUrl + "productgroup/edit";
  private get_productgroup_url = environment.apiUrl + "productgroup/get";
  private get_categories_url = environment.apiUrl + "productgroup/get-list";
  private delete_productgroup_url = environment.apiUrl + "productgroup/delete";

  constructor(protected apiService: ApiRequestService) {
  }

  public getProductGroupsDropdown(): Observable<any> {
    return this.apiService.get(this.productgroup_dropdown_url);
  }

  public addProductGroupInfo(productGroupInfo: ProductGroup): Observable<any> {
    return this.apiService.post(this.add_productgroup_url, productGroupInfo);
  }

  public getProductGroupInfo(id: number): Observable<any> {
    return this.apiService.get(this.get_productgroup_url + "/" + id);
  }

  public editProductGroupInfo(productGroupInfo: ProductGroup): Observable<any> {
    return this.apiService.put(this.edit_productgroup_url, productGroupInfo);
  }

  public getProductGroupList(productGroupFilter: ProductGroupFilter): Observable<any> {
    return this.apiService.get(this.get_categories_url, productGroupFilter);
  }

  public deleteProductGroup(productGroupId: number): Observable<any> {
    return this.apiService.delete(this.delete_productgroup_url + "/" + productGroupId);
  }
}
