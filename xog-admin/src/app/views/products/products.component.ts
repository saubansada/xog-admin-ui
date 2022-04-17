import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Product, ProductFilter, ProductView } from 'src/app/models/product';
import { ProductDivision, ProductQueryType, ResponseObject, transformCamelToSpaces } from 'src/app/models/common';
import { ProductsService } from 'src/app/services/products.service';
import { BaseComponent } from 'src/app/shared/base.component';
import { AppGridColDef } from 'src/app/shared/data-grid/data-grid.component';
import { CategoriesService } from 'src/app/services/categories.service';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';
import { BrandsService } from 'src/app/services/brands.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  formInstance: FormGroup = this.fb.group({
    Search: [''],
    PageNumber: [1],
    SubCategoryId: [],
    CategoryId: [],
    BrandId: [],
    ProductQueryType: [ProductQueryType.FilterOrNone]
  });

  categoryList: any[] = [];

  subCategoryList: any[] = [];

  brandList: any[] = [];

  productsData!: Product[];

  gridData!: ProductView[];

  ProductDivision: typeof ProductDivision = ProductDivision;
    
  @ViewChild('measureColumn', { read: TemplateRef }) measureColumnRef!: TemplateRef<any>;

  @ViewChild('moreColumn', { read: TemplateRef }) moreColumnRef!: TemplateRef<any>;

  columnDefs!: AppGridColDef[];

  constructor(protected injector: Injector,
    private productService: ProductsService,
    private categoriesService: CategoriesService,
    private subCategoriesService: SubCategoriesService,
    private brandsService: BrandsService) {
    super(injector)
  }

  ngOnInit(): void {
    this.categoriesService.getCategoriesDropdown().subscribe((res: ResponseObject<any>) => {
      this.categoryList = res.Data;
    })
    this.subCategoriesService.getSubCategoriesDropdown().subscribe((res: ResponseObject<any>) => {
      this.subCategoryList = res.Data;
    })
    this.brandsService.getBrandsDropdown().subscribe((res: ResponseObject<any>) => {
      this.brandList = res.Data;
    })
    this.loadData();
  }

  filterData() {

    // SubCategoryId: [''],
    // CategoryId: [''],
    // BrandId: [''],
    let search = this.formInstance.get("Search")?.value;
    let subCategoryId = this.formInstance.get("SubCategoryId")?.value;
    let brandId = this.formInstance.get("BrandId")?.value;

    let gridData: ProductView[] = [];
    this.productsData.forEach(item => {
      item.ProductVariants.forEach(element => {

        gridData.push({
          ...item,
          ...element,
        });
      });
    });
    this.gridData = gridData;
  }

  loadData() {
    var data = this.formInstance.value;
    data.PageNumber = 0;
    data.PageSize = 20;
    
    this.productService.getProductList(data).subscribe((res: ResponseObject<Product[]>) => {

      this.productsData = res.Data ?? [];

      this.filterData();

      this.initColumnDefs();
    })
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe((res: ResponseObject<any>) => {
      this.loadData();
    })
  }

  editProduct(data: ProductView) {
    this.router.navigate(['/products/edit', data.ProductId]);
  }

  initColumnDefs() {
    this.columnDefs = [
      { text: "Id", field: "Id" },
      { text: "Code", field: "ProductCode" },
      { text: "Product", field: "ProductName" },
      { text: "Brand", field: "BrandName" },
      { text: "Category", field: "CategoryName" },
      { text: "Volume/Unit", field: "Measure", content: this.measureColumnRef },
      { text: "Mrp", field: "Mrp" },
      { text: "SubCategory", field: "SubCategoryName" },
      {
        text: "", field: "Menu",
        classes: "uk-text-right",
        content: this.moreColumnRef
      }
    ];
  }
}
