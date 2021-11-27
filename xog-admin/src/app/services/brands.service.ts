import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Brand, BrandFilter } from '../models/brand';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private brand_dropdown_url = environment.apiUrl + "/brand/get-select-list";
  private add_brand_url = environment.apiUrl + "brand/add";
  private edit_brand_url = environment.apiUrl + "brand/edit";
  private get_brand_url = environment.apiUrl + "brand/get";
  private get_brands_url = environment.apiUrl + "brand/get-list";
  private delete_brand_url = environment.apiUrl + "brand/delete";

  constructor(protected apiService: ApiRequestService) {
  }

  public getBrandsDropdown(): Observable<any> {
    return this.apiService.get(this.brand_dropdown_url);
  }

  public addBrandInfo(brandInfo: Brand): Observable<any> {
    return this.apiService.post(this.add_brand_url, brandInfo);
  }

  public getBrandInfo(id: number): Observable<any> {
    return this.apiService.get(this.get_brand_url + "/" + id);
  }

  public editBrandInfo(brandInfo: Brand): Observable<any> {
    return this.apiService.put(this.edit_brand_url, brandInfo);
  }

  public getBrandList(brandFilter: BrandFilter): Observable<any> {
    return this.apiService.get(this.get_brands_url, brandFilter);
  }

  public deleteBrand(brandId: number): Observable<any> {
    return this.apiService.delete(this.delete_brand_url + "/" + brandId);
  }
}
