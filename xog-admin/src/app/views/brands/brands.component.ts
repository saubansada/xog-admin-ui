import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Brand, BrandFilter } from 'src/app/models/brand';
import { ProductDivision, ResponseObject, transformCamelToSpaces } from 'src/app/models/common';
import { BrandsService } from 'src/app/services/brands.service';
import { BaseComponent } from 'src/app/shared/base.component';
import { AppGridColDef } from 'src/app/shared/data-grid/data-grid.component';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent extends BaseComponent implements OnInit {

  filter!: BrandFilter;

  gridData!: Brand[];

  ProductDivision: typeof ProductDivision = ProductDivision;

  camelCaseToSpacedText: typeof transformCamelToSpaces = transformCamelToSpaces;

  @ViewChild('urlColumn', { read: TemplateRef }) urlColumnRef!: TemplateRef<any>; 

  @ViewChild('moreColumn', { read: TemplateRef }) moreColumnRef!: TemplateRef<any>;

  columnDefs!: AppGridColDef[];

  constructor(protected injector: Injector, private services: BrandsService) {
    super(injector)
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() { 
    this.services.getBrandList(this.filter).subscribe((res: ResponseObject<Brand[]>) => {
      this.gridData = res.Data ?? [];
      this.initColumnDefs();
    })
  }

  deleteBrand(id: number) {
    this.services.deleteBrand(id).subscribe((res: ResponseObject<any>) => {
      this.loadData();
    })
  }

  editBrand(data: Brand) {
    this.router.navigate(['/brands/edit', data.Id]);
  }

  initColumnDefs() {
    this.columnDefs = [
      { text: "Id", field: "Id" },
      { text: "Brand Url", field: "BrandUrl", content: this.urlColumnRef },
      { text: "Brand Brand", field: "BrandName" },
      { text: "Description", field: "BrandDescription" },
      {
        text: "", field: "Menu",
        classes: "uk-text-right",
        content: this.moreColumnRef
      }
    ];
  }
}
