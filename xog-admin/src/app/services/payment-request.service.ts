import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Brand, BrandFilter } from '../models/brand';
import { ApiRequestService } from './api-request.service';
import { RedeemRequest } from '../models/redeem-request';

@Injectable({
  providedIn: 'root'
})
export class RedeemRequestService {

  private create_redeem_request = environment.apiUrl + "redeemrequest/add";
  private edit_redeem_request = environment.apiUrl + "redeemrequest/edit";
  private get_redeem_request_url = environment.apiUrl + "redeemrequest/get";
  private get_redeem_request_list_url = environment.apiUrl + "redeemrequest/get-list";

  constructor(protected apiService: ApiRequestService) {
  }

  public createRedeemRequest(redeemRequest: any): Observable<any> {
    return this.apiService.post(this.create_redeem_request, redeemRequest);
  }

  public editRedeemRequest(productGroupInfo: RedeemRequest): Observable<any> {
    return this.apiService.put(this.edit_redeem_request, productGroupInfo);
  }

  public getRedeemRequestInfo(id: Number): Observable<any> {
    return this.apiService.get(this.get_redeem_request_url + "/" + id);
  }
  
  public getRedeemRequestList(): Observable<any> {
    return this.apiService.get(this.get_redeem_request_list_url);
  }
 
}
