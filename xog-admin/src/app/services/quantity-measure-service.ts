import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { QuantityMeasure, QuantityMeasureFilter } from '../models/quantity-measure';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class QuantityMeasureService {

  private quantitymeasure_dropdown_url = environment.apiUrl + "/quantitymeasure/get-select-list";
  private add_quantitymeasure_url = environment.apiUrl + "quantitymeasure/add";
  private edit_quantitymeasure_url = environment.apiUrl + "quantitymeasure/edit";
  private get_quantitymeasure_url = environment.apiUrl + "quantitymeasure/get";
  private get_categories_url = environment.apiUrl + "quantitymeasure/get-list";
  private delete_quantitymeasure_url = environment.apiUrl + "quantitymeasure/delete";

  constructor(protected apiService: ApiRequestService) {
  }

  public getQuantityMeasuresDropdown(): Observable<any> {
    return this.apiService.get(this.quantitymeasure_dropdown_url);
  }

  public addQuantityMeasureInfo(quantityMeasureInfo: QuantityMeasure): Observable<any> {
    return this.apiService.post(this.add_quantitymeasure_url, quantityMeasureInfo);
  }

  public getQuantityMeasureInfo(id: number): Observable<any> {
    return this.apiService.get(this.get_quantitymeasure_url + "/" + id);
  }

  public editQuantityMeasureInfo(quantityMeasureInfo: QuantityMeasure): Observable<any> {
    return this.apiService.put(this.edit_quantitymeasure_url, quantityMeasureInfo);
  }

  public getQuantityMeasureList(quantityMeasureFilter: QuantityMeasureFilter): Observable<any> {
    return this.apiService.get(this.get_categories_url, quantityMeasureFilter);
  }

  public deleteQuantityMeasure(quantityMeasureId: number): Observable<any> {
    return this.apiService.delete(this.delete_quantitymeasure_url + "/" + quantityMeasureId);
  }
}
