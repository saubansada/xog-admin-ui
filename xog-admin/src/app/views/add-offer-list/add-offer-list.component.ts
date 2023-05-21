import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ResponseObject, enumToKeyValueArray, transformCamelToSpaces } from 'src/app/models/common';
import { Offer, OfferDetail, OfferFilter, OfferState } from 'src/app/models/offer';
import { Product, ProductFilter } from 'src/app/models/product';
import { OfferService } from 'src/app/services/offer.service';
import { ProductsService } from 'src/app/services/products.service';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
  selector: 'app-add-offer-list',
  templateUrl: './add-offer-list.component.html',
  styleUrls: ['./add-offer-list.component.scss']
})
export class AddOfferListComponent extends BaseComponent implements OnInit {

  offerFilter: OfferFilter = new OfferFilter();
  productList: Product[] = [];

  statusList: any[] = enumToKeyValueArray(OfferState).filter(i => i.id != 0);

  camelCaseToSpacedText: typeof transformCamelToSpaces = transformCamelToSpaces;

  offers: Offer;

  isEdit: boolean = false;

  formInstance: FormGroup = this.fb.group({
    Id: [null],
    DisplayName: ['', Validators.required],
    Description: ['', Validators.required],
    OfferStatus: [1, Validators.required],
    OfferDetails: [[]]
  });

  constructor(protected injector: Injector, protected offerService: OfferService, private productsService: ProductsService) {
    super(injector);
    this.route.paramMap.subscribe(res => {
      var id = <any>res.get("id");
      this.isEdit = false;
      if (id != null && !isNaN(id)) {
        this.loadOfferDetails(id);
        this.isEdit = true;
      }
    });
  }

  get productDetails(): any {
    let products: any[] = [];
    let details = this.formInstance.get("OfferDetails")?.value ?? [];
    this.productList.forEach((element: Product) => {
      let ind = details.findIndex((id: number) => id == element.Id)
      if (ind > -1) {
        products.push(element);
      }
    });
    return products;
  }

  ngOnInit(): void {
    this.resetForm();
    this.loadProducts()
  }

  loadProducts() {
    let productFitler: ProductFilter = new ProductFilter();
    this.productsService.getProductList(productFitler).subscribe((res: ResponseObject<Product[]>) => {
      this.productList = res.Data ?? [];
    })
  }

  loadOfferDetails(id: number) {
    this.offerService.getOfferInfo(id).subscribe((res: ResponseObject<Offer>) => {
      let data = res.Data ?? new Offer(); 
      this.formInstance.patchValue(data);
      this.formInstance.get("OfferDetails")?.patchValue(data.OfferDetails.map((i: OfferDetail) => i.ProductId));
    })
  }

  addOffer() {
    var offer = this.formInstance.value as Offer;
    let _offerDetails: OfferDetail[] = [];
    let val = this.formInstance.get("OfferDetails")?.value ?? [];
    val.forEach((item: number) => {
      let offerDetail = new OfferDetail();
      offerDetail.Id = 0;
      offerDetail.OfferId = 0;
      offerDetail.ProductId = item;
      _offerDetails.push(offerDetail);
    });

    offer.OfferDetails = Object.assign([], _offerDetails) ;
    if (!this.isEdit) {
      this.offerService.addOffer(offer).subscribe(() => {
        this.resetForm();
      });
    } else {
      this.offerService.updateOffer(offer).subscribe(() => {

      })
    }
  }

  remove(id: number) {
    let val = this.formInstance.get("OfferDetails")?.value ?? [];
    let ind = val.findIndex((item: number) => item == id);
    if (ind > -1) {
      val.splice(ind, 1);
      this.formInstance.patchValue({ OfferDetails: val })
    }
  }

  resetForm() {

    this.formInstance.reset({
      OfferStatus: 1
    });
  }
}
