import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Wallet, WalletFilter } from '../models/WalletInfo';
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class WalletsService {

  private wallet_dropdown_url = environment.apiUrl + "/wallet/get-select-list";
  private add_wallet_url = environment.apiUrl + "wallet/add";
  private edit_wallet_url = environment.apiUrl + "wallet/edit";
  private get_wallet_url = environment.apiUrl + "wallet/get";
  private get_wallets_url = environment.apiUrl + "wallet/get-list";
  private delete_wallet_url = environment.apiUrl + "wallet/delete";

  constructor(protected apiService: ApiRequestService) {
  }

  public getWalletsDropdown(): Observable<any> {
    return this.apiService.get(this.wallet_dropdown_url);
  }

  public addWalletInfo(walletInfo: Wallet): Observable<any> {
    return this.apiService.post(this.add_wallet_url, walletInfo);
  }

  public getWalletInfo(id: number): Observable<any> {
    return this.apiService.get(this.get_wallet_url + "/" + id);
  }

  public editWalletInfo(walletInfo: Wallet): Observable<any> {
    return this.apiService.put(this.edit_wallet_url, walletInfo);
  }

  public getWalletList(walletFilter: WalletFilter): Observable<any> {
    return this.apiService.get(this.get_wallets_url, walletFilter);
  }

  public deleteWallet(walletId: number): Observable<any> {
    return this.apiService.delete(this.delete_wallet_url + "/" + walletId);
  }
}
