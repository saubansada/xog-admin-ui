import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { OrderFilter } from 'src/app/models/order';
import { environment } from 'src/environments/environment'; 
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
   
  private get_order_url = environment.apiUrl + "order/get";
  private get_orders_url = environment.apiUrl + "order/get-list";
  private delete_orders_url = environment.apiUrl + "order/delete";
    
  constructor(protected apiService: ApiRequestService) {
  }
 
  public getOrderInfo(id: number): Observable<any> {
    return this.apiService.get(this.get_order_url + "/" + id);
  }
 
  public getOrderList(orderFilter: OrderFilter): Observable<any> {
    return this.apiService.get(this.get_orders_url, orderFilter);
  }
}