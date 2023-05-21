import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Offer, OfferBanner, OfferFilter } from 'src/app/models/offer';
import { environment } from 'src/environments/environment'; 
import { ApiRequestService } from './api-request.service';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
   
  private get_offer_url = environment.apiUrl + "offer/get";
  private get_offer_banner_url = environment.apiUrl + "offer-banner/get";

  private get_offers_url = environment.apiUrl + "offer/get-list"; 
  private get_offer_banners_url = environment.apiUrl + "offer-banner/get-list"; 

  private add_offer_url = environment.apiUrl + "offer/add"; 
  private add_offer_banner_url = environment.apiUrl + "offer-banner/add"; 

  private update_offer_url = environment.apiUrl + "offer/edit"; 
  private update_offer_banner_url = environment.apiUrl + "offer-banner/edit"; 
 
  private delete_offer_url = environment.apiUrl + "offer/delete"; 
  private delete_offer_banner_url = environment.apiUrl + "offer-banner/delete"; 
    
  constructor(protected apiService: ApiRequestService) {
  }
 
  public addOffer(offer: Offer): Observable<any> {
    return this.apiService.post(this.add_offer_url, offer);
  }  
  
  public addOfferBanner(offer: OfferBanner): Observable<any> { 
    return this.apiService.post(this.add_offer_banner_url, offer);
  }
   

  public getOfferInfo(id: number): Observable<any> {
    return this.apiService.get(this.get_offer_url + "/" + id);
  }

  public getOfferBannerInfo(id: number): Observable<any> {
    return this.apiService.get(this.get_offer_banner_url + "/" + id);
  }
  

  public getOfferList(offerFilter: OfferFilter): Observable<any> {
    return this.apiService.get(this.get_offers_url, offerFilter);
  }

  public getOfferBannerList(offerFilter: OfferFilter): Observable<any> {
    return this.apiService.get(this.get_offer_banners_url, offerFilter);
  }
 

  public updateOffer(offer: Offer): Observable<any> {
    return this.apiService.put(this.update_offer_url, offer);
  }
 
  public updateOfferBanner(offer: OfferBanner): Observable<any> {
    return this.apiService.put(this.update_offer_banner_url, offer);
  }

  public deleteOfferBanner(offerId: number): Observable<any> {
    return this.apiService.delete(this.delete_offer_banner_url + "/" + offerId);
  }
 
  public deleteOffer(offerId: number): Observable<any> {
    return this.apiService.delete(this.delete_offer_url + "/" + offerId);
  }
 
}