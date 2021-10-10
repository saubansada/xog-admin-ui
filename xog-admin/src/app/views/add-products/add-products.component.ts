import { HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { enumToKeyValueArray, ResponseObject, transformCamelToSpaces } from 'src/app/models/common';
import { Product } from 'src/app/models/product';
import { BrandsService } from 'src/app/services/brands.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductGroupsService } from 'src/app/services/product-groups.service';
import { ProductsService } from 'src/app/services/products.service';
import { QuantityMeasureService } from 'src/app/services/quantity-measure-service';
import { SettingsService } from 'src/app/services/settings.service';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';
import { BaseComponent } from 'src/app/shared/base.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent extends BaseComponent implements OnInit {

  isEdit: boolean = false;

  categoryList: any[] = [];
  subCategoryList: any[] = [];
  brandList: any[] = [];
  productGroupList: any[] = [];
  measureList: any[] = [];
  taxList: any[] = [];
  productVariantsArray!: FormArray;


  camelCaseToSpacedText: typeof transformCamelToSpaces = transformCamelToSpaces;

  formInstance: FormGroup = this.fb.group({
    Id: [],
    ProductCode: [null],
    BrandId: [-1, [Validators.required, Validators.min(0)]],
    CategoryId: [-1, [Validators.required, Validators.min(0)]],
    SubCategoryId: [-1, [Validators.required, Validators.min(0)]],
    ProductGroupId: [-1],
    ProductName: [null, Validators.required],
    Description: [null],
    Enabled: [true],
    ProductImages: [[]],
    ProductVariants: this.fb.array([])
  });

  get productId() { return this.formInstance.get("Id"); }
  get categoryId() { return this.formInstance.get("CategoryId"); }
  get subCategoryId() { return this.formInstance.get("SubCategoryId"); }
  get productGroupId() { return this.formInstance.get("ProductGroupId"); }

  constructor(protected injector: Injector,
    private productService: ProductsService,
    private settingService: SettingsService,
    private quantityMeasureService: QuantityMeasureService,
    private productGroupService: ProductGroupsService,
    private categoriesService: CategoriesService,
    private subCategoriesService: SubCategoriesService,
    private brandsService: BrandsService) {

    super(injector);

    this.route.paramMap.subscribe(res => {
      var id = <any>res.get("id");
      this.isEdit = false;
      if (id != null && !isNaN(id)) {
        this.loadProduct(id);
        this.isEdit = true;
      } else {
        this.addItem();
      }
    });
  }

  ngOnInit(): void {
    this.quantityMeasureService.getQuantityMeasuresDropdown().subscribe((res: ResponseObject<any>) => {
      this.measureList = res.Data;
    });
    this.categoriesService.getCategoriesDropdown().subscribe((res: ResponseObject<any>) => {
      this.categoryList = res.Data;
    });
    this.subCategoriesService.getSubCategoriesDropdown().subscribe((res: ResponseObject<any>) => {
      this.subCategoryList = res.Data;
    });
    this.brandsService.getBrandsDropdown().subscribe((res: ResponseObject<any>) => {
      this.brandList = res.Data;
    });
    this.productGroupService.getProductGroupsDropdown().subscribe((res: ResponseObject<any>) => {
      this.productGroupList = res.Data;
    });
    this.settingService.getTaxes().subscribe((res: ResponseObject<any>) => {
      this.taxList = (res.Data ?? "").split(",");
    })
  }

  loadProduct(id: number) {
    this.productService.getProductInfo(id).subscribe((res: ResponseObject<any>) => {
      let data: Product = res.Data;
      data.ProductVariants.forEach(item => {
        this.addItem();
      })
      this.formInstance.patchValue(data);
    });
  }

  submitForm() {

    if (this.isEdit) {
      this.productService.editProductInfo(this.formInstance.value).subscribe();
    } else {
      this.productService.addProductInfo(this.formInstance.value).subscribe();
      this.resetForm();
    }
  }

  resetForm() {
    this.formInstance.reset({
      CategoryId: -1,
      BrandId: -1,
      SubCategoryId: -1,
      ProductGroupId: -1,
      ProductImages: []
    });
    while (this.productVariants.length) {
      this.productVariantsControls.removeAt(0);
    }
    this.addItem();
  }

  get productVariants() {
    return (this.formInstance?.get('ProductVariants') as FormArray).controls;
  }

  get productVariantsControls() {
    return (this.formInstance?.get('ProductVariants') as FormArray);
  }

  createItem(productId?: number): FormGroup {
    return this.fb.group({
      Id: [''],
      ProductId: [productId],
      Mrp: ['', [Validators.required]],
      MeasureId: [-1, [Validators.required]],
      Volume: ['', [Validators.required]],
      StocksAvailable: [0, [Validators.required]],
      Gst: [0, [Validators.required]],
      Cost: [0, [Validators.required]],
      MaxPurchase: ['', [Validators.required]],
      DiscountPercentage: ['', [Validators.required]]
    });
  }

  addItem(): void {
    this.productVariantsArray = this.formInstance.get('ProductVariants') as FormArray;
    this.productVariantsArray.push(this.createItem(this.productId?.value));
  }
}
