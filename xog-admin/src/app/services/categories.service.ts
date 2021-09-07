import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Category, CategoryFilter } from '../models/category';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private category_dropdown_url = environment.apiUrl + "/category/get-select-list";
  private add_category_url = environment.apiUrl + "category/add";
  private edit_category_url = environment.apiUrl + "category/edit";
  private get_categories_url = environment.apiUrl + "category/get-list";
  private delete_category_url = environment.apiUrl + "category/delete";

  constructor(protected apiService: ApiRequestService) {
  }

  public getCategoriesDropdown(): Observable<any> {
    return this.apiService.get(this.category_dropdown_url);
  }

  public addCategoryInfo(categoryInfo: Category): Observable<any> {
    return this.apiService.post(this.add_category_url, categoryInfo);
  }

  public editCategoryInfo(categoryInfo: Category): Observable<any> {
    return this.apiService.put(this.edit_category_url, categoryInfo);
  }

  public getCategoryList(categoryFilter: CategoryFilter): Observable<any> {
    return this.apiService.get(this.get_categories_url, categoryFilter);
  }

  public deleteCategory(categoryId: number): Observable<any> {
    return this.apiService.delete(this.delete_category_url + "/" + categoryId);
  }
}
