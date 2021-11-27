import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
 
  private get_taxes_url = environment.apiUrl + "settings/get/taxes";
  private save_taxes_url = environment.apiUrl + "settings/save/taxes";

  constructor(protected apiService: ApiRequestService) {
  }

  public getTaxes(): Observable<any> {
    return this.apiService.get(this.get_taxes_url);
  }

  public saveTaxes(value: any): Observable<any> {
    return this.apiService.post(this.save_taxes_url, value);
  }
}
