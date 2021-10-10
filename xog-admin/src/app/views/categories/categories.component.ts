import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Category, CategoryFilter } from 'src/app/models/category';
import { ProductDivision, ResponseObject, transformCamelToSpaces } from 'src/app/models/common';
import { CategoriesService } from 'src/app/services/categories.service';
import { BaseComponent } from 'src/app/shared/base.component';
import { AppGridColDef } from 'src/app/shared/data-grid/data-grid.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent extends BaseComponent implements OnInit {

  filter!: CategoryFilter;

  gridData!: Category[];

  ProductDivision: typeof ProductDivision = ProductDivision;

  camelCaseToSpacedText: typeof transformCamelToSpaces = transformCamelToSpaces;

  @ViewChild('divisionColumn', { read: TemplateRef }) divisionColumnRef!: TemplateRef<any>;

  @ViewChild('imgColumn', { read: TemplateRef }) imgColumnRef!: TemplateRef<any>;

  @ViewChild('moreColumn', { read: TemplateRef }) moreColumnRef!: TemplateRef<any>;

  columnDefs!: AppGridColDef[];

  constructor(protected injector: Injector, private services: CategoriesService) {
    super(injector)
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() { 
    this.services.getCategoryList(this.filter).subscribe((res: ResponseObject<Category[]>) => {
      this.gridData = res.Data ?? [];
      this.initColumnDefs();
    })
  }

  deleteCategory(id: number) {
    this.services.deleteCategory(id).subscribe((res: ResponseObject<any>) => {
      this.loadData();
    })
  }

  editCategory(data: Category) {
    this.router.navigate(['/categories/edit', data.Id]);
  }

  initColumnDefs() {
    this.columnDefs = [
      { text: "Id", field: "Id" },
      { text: "Category Category", field: "CategoryName" },
      { text: "Description", field: "CategoryDescription" },
      {
        text: "Image", field: "ProductGroupImage",
        classes: "uk-text-left od-product-img",
        content: this.imgColumnRef
      },
      {
        text: "Banner", field: "ProductGroupBanner",
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
