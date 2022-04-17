import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Order, OrderFilter, OrderReturn } from 'src/app/models/order';
import { environment } from 'src/environments/environment'; 
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
   
  private get_order_url = environment.apiUrl + "order/get";
  private get_orders_url = environment.apiUrl + "order/get-list";
  private initiate_return_url = environment.apiUrl + "order/initiate-return"; 
  private update_order_status_url = environment.apiUrl + "order/update-order-status"; 
  private update_order_return_status = environment.apiUrl + "order/update-order-return-status"; 
    
  constructor(protected apiService: ApiRequestService) {
  }
 
  public getOrderInfo(id: number, isReturn: boolean): Observable<any> {
    return this.apiService.get(this.get_order_url + "/" + id + "?isReturnedOrder=" + isReturn);
  }
  
  public getOrderList(orderFilter: OrderFilter): Observable<any> {
    return this.apiService.get(this.get_orders_url, orderFilter);
  }
 
  public updateOrderStatus(order: Order): Observable<any> {
    return this.apiService.post(this.update_order_status_url, order);
  }

  public initiateOrderReturns(orderReturnInfo: OrderReturn): Observable<any> {
    return this.apiService.post(this.initiate_return_url, orderReturnInfo);
  }

  public updateOrderReturnStatus(order: OrderReturn): Observable<any> {
    return this.apiService.post(this.update_order_return_status, order);
  }
}