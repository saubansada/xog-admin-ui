import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SubCategory, SubCategoryFilter } from '../models/sub-category';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesService {

  private subcategory_dropdown_url = environment.apiUrl + "/subcategory/get-select-list";
  private add_subcategory_url = environment.apiUrl + "subcategory/add";
  private edit_subcategory_url = environment.apiUrl + "subcategory/edit";
  private get_subcategory_url = environment.apiUrl + "subcategory/get";
  private get_categories_url = environment.apiUrl + "subcategory/get-list";
  private delete_subcategory_url = environment.apiUrl + "subcategory/delete";

  constructor(protected apiService: ApiRequestService) {
  }

  public getSubCategoriesDropdown(): Observable<any> {
    return this.apiService.get(this.subcategory_dropdown_url);
  }

  public addSubCategoryInfo(subCategoryInfo: SubCategory): Observable<any> {
    return this.apiService.post(this.add_subcategory_url, subCategoryInfo);
  }

  public getSubCategoryInfo(id: number): Observable<any> {
    return this.apiService.get(this.get_subcategory_url + "/" + id);
  }

  public editSubCategoryInfo(subCategoryInfo: SubCategory): Observable<any> {
    return this.apiService.put(this.edit_subcategory_url, subCategoryInfo);
  }

  public getSubCategoryList(subCategoryFilter: SubCategoryFilter): Observable<any> {
    return this.apiService.get(this.get_categories_url, subCategoryFilter);
  }

  public deleteSubCategory(subCategoryId: number): Observable<any> {
    return this.apiService.delete(this.delete_subcategory_url + "/" + subCategoryId);
  }
}
