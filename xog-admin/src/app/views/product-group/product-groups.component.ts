import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductGroup, ProductGroupFilter } from 'src/app/models/product-group';
import { ResponseObject } from 'src/app/models/common';
import { BaseComponent } from 'src/app/shared/base.component';
import { ProductGroupsService } from 'src/app/services/product-groups.service';
import { AppGridColDef } from 'src/app/shared/data-grid/data-grid.component';


@Component({
  selector: 'app-product-groups',
  templateUrl: './product-groups.component.html',
  styleUrls: ['./product-groups.component.scss']
})
export class ProductGroupsComponent extends BaseComponent implements OnInit {

  filter!: ProductGroupFilter;

  gridData!: ProductGroup[];

  @ViewChild('imgColumn', { read: TemplateRef }) imgColumnRef!: TemplateRef<any>;

  @ViewChild('moreColumn', { read: TemplateRef }) moreColumnRef!: TemplateRef<any>;

  columnDefs!: AppGridColDef[];

  constructor(protected injector: Injector, private services: ProductGroupsService) {
    super(injector)
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() { 
    this.services.getProductGroupList(this.filter).subscribe((res: ResponseObject<ProductGroup[]>) => {
      this.gridData = res.Data ?? [];
      this.initColumnDefs();
    })
  }

  deleteProductGroup(id: number) {
    this.services.deleteProductGroup(id).subscribe((res: ResponseObject<any>) => {
      this.showMessage(res);
      this.loadData(); 
    })
  }

  editProductGroup(data: ProductGroup) {
    this.router.navigate(['/product-groups/edit', data.Id]);
  }

  initColumnDefs() {
    this.columnDefs = [
      { text: "Product Group Id", field: "Id" },
      { text: "Sub-Category Name", field: "SubCategoryName" },
      { text: "Product Group Category", field: "ProductGroupName" },
      { text: "Description", field: "ProductGroupDescription" },
      {
        text: "Image", field: "ProductGroup",
        classes: "uk-text-left od-product-img",
        content: this.imgColumnRef
      },
      {
        text: "", field: "Menu",
        classes: "uk-text-right",
        content: this.moreColumnRef
      }
    ];
  }
}
