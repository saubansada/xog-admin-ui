import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { enumToKeyValueArray, transformCamelToSpaces } from 'src/app/models/common';
import { Offer, OfferBanner, OfferBannerPlacement, OfferFilter, OfferState } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer.service';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
  selector: 'app-add-offers',
  templateUrl: './add-offers.component.html',
  styleUrls: ['./add-offers.component.scss']
})
export class AddOffersComponent extends BaseComponent implements OnInit {

  offerFilter: OfferFilter = new OfferFilter();

  offers: Offer;

  statusList: any[] = enumToKeyValueArray(OfferState).filter(i => i.id != 0);
  placementList: any[] = enumToKeyValueArray(OfferBannerPlacement).filter(i => i.id != 0);

  offerList: Offer[] = [];

  isEdit: boolean = false;

  camelCaseToSpacedText: typeof transformCamelToSpaces = transformCamelToSpaces;

  formInstance: FormGroup = this.fb.group({
    Id: [],
    DisplayName: ['', Validators.required],
    Description: ['', Validators.required],
    OfferStatus: [1, Validators.required],
    OfferUrl: ['', Validators.required],
    OfferId: [1, Validators.required],
    Placement: [1, Validators.required],
    BannerImageUrls: [[]]
  });

  constructor(protected injector: Injector, protected offerService: OfferService) {
    super(injector);
    this.route.paramMap.subscribe(res => {
      var id = <any>res.get("id");
      this.isEdit = false;
      if (id != null && !isNaN(id)) {
        this.loadOfferBannereDetails(id);
        this.isEdit = true;
      }
    });
  }

  ngOnInit(): void {
    this.loadOffers();
    this.resetForm();
  }

  loadOffers() {
    let offerFilter: OfferFilter = new OfferFilter();
    this.offerService.getOfferList(offerFilter).subscribe(res => {
      this.offerList = res.Data;
    })
  }

  loadOfferBannereDetails(id: number) {
    this.offerService.getOfferBannerInfo(id).subscribe(res => {
      let data = res.Data;
      data.BannerImageUrls = data.BannerImageUrl == null ? [] : [data.BannerImageUrl];
      data.OfferStatus = parseInt(data.OfferStatus)
      this.formInstance.patchValue(data);
    })
  }

  addOfferBanner() {

    var data = this.formInstance.value;
    var offer = this.formInstance.value as OfferBanner;
    offer.BannerImageUrl = data.BannerImageUrls?.length > 0 ? data.BannerImageUrls[0] : null;

    if (!this.isEdit) {
      this.offerService.addOfferBanner(offer).subscribe(() => {
      });
    }
    else {
      this.offerService.updateOfferBanner(offer).subscribe(() => { 
      });
    }
  }

  resetForm() {
    this.formInstance.reset({
      BannerImageUrls: []
    });
  }
}