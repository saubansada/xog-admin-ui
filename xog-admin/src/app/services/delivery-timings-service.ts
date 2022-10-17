import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { DeliveryTiming, DeliveryTimingFilter, WeekDayStatus } from '../models/delivery-timings';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class DeliveryTimingsService {

    private quantitymeasure_dropdown_url = environment.apiUrl + "/deliverytimings/get-select-list";
    private add_quantitymeasure_url = environment.apiUrl + "deliverytimings/add";
    private edit_quantitymeasure_url = environment.apiUrl + "deliverytimings/edit";
    private get_quantitymeasure_url = environment.apiUrl + "deliverytimings/get";
    private get_categories_url = environment.apiUrl + "deliverytimings/get-list";
    private delete_quantitymeasure_url = environment.apiUrl + "deliverytimings/delete";

    constructor(protected apiService: ApiRequestService) {
    }
  
    public getDeliveryTimingssDropdown(): Observable<any> {
      return this.apiService.get(this.quantitymeasure_dropdown_url);
    }
  
    public addDeliveryTimingsInfo(weekDayStatus: WeekDayStatus): Observable<any> {
      return this.apiService.post(this.add_quantitymeasure_url, weekDayStatus);
    }
  
    public getDeliveryTimingsInfo(id: number): Observable<any> {
      return this.apiService.get(this.get_quantitymeasure_url + "/" + id);
    }
  
    public editDeliveryTimingsInfo(weekDayStatus: WeekDayStatus): Observable<any> {
      return this.apiService.put(this.edit_quantitymeasure_url, weekDayStatus);
    }
  
    public getDeliveryTimingsList(quantityMeasureFilter: DeliveryTimingFilter): Observable<any> {
      return this.apiService.get(this.get_categories_url, quantityMeasureFilter);
    }
  
    public deleteDeliveryTimings(quantityMeasureId: number): Observable<any> {
      return this.apiService.delete(this.delete_quantitymeasure_url + "/" + quantityMeasureId);
    }
}