import { Component, Injector, OnInit } from '@angular/core';
import { ProductQueryType } from 'src/app/models/common';
import { OfferFilter, OfferBanner, Offer, OfferDetail } from 'src/app/models/offer';
import { Product, ProductFilter } from 'src/app/models/product';
import { OfferService } from 'src/app/services/offer.service';
import { ProductsService } from 'src/app/services/products.service';
import { BaseComponent } from 'src/app/shared/base.component';


declare var UIkit: any;

@Component({
  selector: 'app-offer-lists',
  templateUrl: './offer-lists.component.html',
  styleUrls: ['./offer-lists.component.scss']
})
export class OfferListsComponent extends BaseComponent implements OnInit {

  offerFilter: OfferFilter = new OfferFilter();
  offers: Offer[];

  selectedOffer: Offer | null = null;

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

  constructor(protected injector: Injector, protected offerService: OfferService,
    private productService: ProductsService) {
    super(injector);
  }

  ngOnInit(): void { 
    this.loadOffers(); 
  }

  loadOffers(callback?: any) {
    this.offerService.getOfferList(this.offerFilter).subscribe(res => {
      this.offers = res.Data;
      if (callback) callback();
    })
  }

  openDetail(offer: Offer) {
    let productFilter: ProductFilter = new ProductFilter();
    productFilter.Ids = offer.OfferDetails.map(i => i.ProductId).join() + ",";
    productFilter.ProductQueryType = ProductQueryType.FilterOrNone;

    this.productService.getProductList(productFilter).subscribe((res) => {
      let products: Product[] = res.Data;
      offer.OfferDetails.forEach(item => {
        let product = products.filter(i => i.Id == item.ProductId)[0];
        if (product != null) {
          item.Product = product;
        }
      })
      this.selectedOffer = offer;
      this.offerDetailModal.show();
    })
  }

  confirmModalDialog(offer: Offer) {
    this.selectedOffer = offer;
    this.deleteConfirmModal.show();
  }

  cancelDelete() {
    this.deleteConfirmModal.hide();
  }

  confirmDelete() {
    if (this.selectedOffer != null) {
      this.offerService.deleteOffer(this.selectedOffer?.Id ?? -1).subscribe(() => {
        this.loadOffers();
        this.deleteConfirmModal.hide();
      })
    }
  }

  navigateEdit(offer: Offer) {    
    this.offerDetailModal.hide();
    this.router.navigate(['/offer-lists/edit', offer.Id]);
    this.selectedOffer = null;
  }
}
