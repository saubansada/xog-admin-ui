import { Component, Injector, OnInit } from '@angular/core';
import { SubCategory, SubCategoryFilter } from 'src/app/models/sub-category';
import { ResponseObject } from 'src/app/models/common'; 
import { BaseComponent } from 'src/app/shared/base.component';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';


@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent extends BaseComponent implements OnInit {

  filter!: SubCategoryFilter;

  gridData!: SubCategory[];

  constructor(protected injector: Injector, private services: SubCategoriesService) {
    super(injector)
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.services.getSubCategoryList(this.filter).subscribe((res: ResponseObject<SubCategory[]>) => {
      this.gridData = res.Data ?? [];
    })
  }

  deleteSubCategory(id: number) {
    this.services.deleteSubCategory(id).subscribe((res: ResponseObject<any>) => {
      this.showMessage(res);
      this.loadData();
    })
  }

  editSubCategory(data: any) {
    this.router.navigate(['sub-categories', 'edit'], { state: { data: data } });
  }
}
