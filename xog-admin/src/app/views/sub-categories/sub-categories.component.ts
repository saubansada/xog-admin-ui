import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { SubCategory, SubCategoryFilter } from 'src/app/models/sub-category';
import { ResponseObject } from 'src/app/models/common';
import { BaseComponent } from 'src/app/shared/base.component';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';
import { AppGridColDef } from 'src/app/shared/data-grid/data-grid.component';


@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent extends BaseComponent implements OnInit {

  filter!: SubCategoryFilter;

  gridData!: SubCategory[];

  @ViewChild('imgColumn', { read: TemplateRef }) imgColumnRef!: TemplateRef<any>;

  @ViewChild('moreColumn', { read: TemplateRef }) moreColumnRef!: TemplateRef<any>;

  columnDefs!: AppGridColDef[];

  constructor(protected injector: Injector, private services: SubCategoriesService) {
    super(injector)
  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() { 
    this.services.getSubCategoryList(this.filter).subscribe((res: ResponseObject<SubCategory[]>) => {
      this.gridData = res.Data ?? [];
      this.initColumnDefs();
    })
  }

  deleteSubCategory(id: number) {
    this.services.deleteSubCategory(id).subscribe((res: ResponseObject<any>) => {
      this.showMessage(res);
      this.loadData(); 
    })
  }

  editSubCategory(data: SubCategory) {
    this.router.navigate(['/sub-categories/edit', data.Id]);
  }

  initColumnDefs() {
    this.columnDefs = [
      { text: "SubCategory Id", field: "Id" },
      { text: "Category Name", field: "CategoryName" },
      { text: "Sub Category", field: "SubCategoryName" },
      { text: "Description", field: "SubCategoryDescription" },
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
