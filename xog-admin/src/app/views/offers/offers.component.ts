import { Component, Injector, OnInit } from '@angular/core';
import { ResponseObject, transformCamelToSpaces } from 'src/app/models/common';
import { OfferBanner, OfferBannerPlacement, OfferFilter } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';
import { BaseComponent } from 'src/app/shared/base.component';
import { environment } from 'src/environments/environment';

declare var UIkit: any;

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent extends BaseComponent implements OnInit {

  offerFilter: OfferFilter = new OfferFilter();
  offers: OfferBanner[];

  baseUrl: string = environment.baseUrl;

  bannerPlacement = OfferBannerPlacement;

  selectedOfferBanner: OfferBanner | null = null;

  camelCaseToSpacedText: typeof transformCamelToSpaces = transformCamelToSpaces;

  constructor(protected injector: Injector, protected offerService: OfferService) {
    super(injector);
  }

  ngOnInit(): void {
    this.loadOfferBanners();
  }

  loadOfferBanners(callback?: any) {
    this.offerService.getOfferBannerList(this.offerFilter).subscribe((res : ResponseObject<OfferBanner[]>)=> {
      res.Data?.forEach((item : OfferBanner) => {
        item.BannerImageUrl = item.BannerImageUrl.replace("~/", '');
      })
      this.offers = res.Data ?? [];
      if(callback) callback();
    })
  }

  _deleteConfirmModal: any;
  get deleteConfirmModal(): any {
    if (this._deleteConfirmModal == null) {
      this._deleteConfirmModal = UIkit.modal('#delete-confirmation');
    }
    return this._deleteConfirmModal;
  }

  _offerDetailModal: any;
  get offerDetailModal(): any {
    if (this._offerDetailModal == null) {
      this._offerDetailModal = UIkit.modal('#detail-modal');
    }
    return this._offerDetailModal;
  }


  openDetail(offerBanner: OfferBanner) {

    this.selectedOfferBanner = offerBanner;
    this.offerDetailModal.show();
  }

  confirmModalDialog(offer: OfferBanner) {
    this.selectedOfferBanner = offer;
    this.deleteConfirmModal.show();
  }

  cancelDelete() {
    this.deleteConfirmModal.hide();
  }

  confirmDelete() {
    if (this.selectedOfferBanner != null) {
      this.offerService.deleteOfferBanner(this.selectedOfferBanner?.Id ?? -1).subscribe(() => {
        this.loadOfferBanners();
        this.deleteConfirmModal.hide();
      })
    }
  }
 
  navigateEdit(offer: OfferBanner) {
    this.offerDetailModal.hide();
    this.router.navigate(['/offers/edit', offer.Id]);
    this.selectedOfferBanner = null;
  }
}
