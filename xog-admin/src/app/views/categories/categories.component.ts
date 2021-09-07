import { Component, Injector, OnInit } from '@angular/core';
import { Category, CategoryFilter } from 'src/app/models/category';
import { ResponseObject } from 'src/app/models/common';
import { CategoriesService } from 'src/app/services/categories.service';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent extends BaseComponent implements OnInit {

  filter!: CategoryFilter;

  gridData!: Category[];

  constructor(protected injector: Injector, private services: CategoriesService) {
    super(injector)
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.services.getCategoryList(this.filter).subscribe((res: ResponseObject<Category[]>) => {
      this.gridData = res.Data ?? [];
    })
  }

  deleteCategory(id: number) {
    this.services.deleteCategory(id).subscribe((res: ResponseObject<any>) => {
      this.showMessage(res);
      this.loadData();
    })
  }

  editCategory(data: any) {
    this.router.navigate(['categories', 'edit'], { state: { data: data } });
  }
}
