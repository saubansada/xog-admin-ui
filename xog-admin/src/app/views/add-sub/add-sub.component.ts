import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ResponseObject } from 'src/app/models/common';
import { CategoriesService } from 'src/app/services/categories.service';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
  selector: 'app-add-sub',
  templateUrl: './add-sub.component.html',
  styleUrls: ['./add-sub.component.scss']
})
export class AddSubComponent extends BaseComponent implements OnInit {

  isEdit: boolean = false;
  categoryList: any[] = [];

  formInstance: FormGroup = this.fb.group({
    Id: [],
    CategoryId: [-1],
    SubCategoryName: ['', Validators.required],
    SubCategoryDescription: []
  });

  constructor(protected injector: Injector, private subCategoryService: SubCategoriesService, 
    private categoriesService: CategoriesService) {
    super(injector);
    let data = this.router.getCurrentNavigation()?.extras.state?.data;
    this.formInstance.patchValue(data);
    this.isEdit = data != null;
  }

  ngOnInit(): void {
    this.categoriesService.getCategoriesDropdown().subscribe((res: ResponseObject<any>) => {
      this.categoryList = res.Data;
    })
  }

  submitForm() {
    if (this.isEdit) {
      this.subCategoryService.editSubCategoryInfo(this.formInstance.value).subscribe((res: ResponseObject<any>) => {
        this.showMessage(res);
      })
    } else {
      this.subCategoryService.addSubCategoryInfo(this.formInstance.value).subscribe((res: ResponseObject<any>) => {
        this.showMessage(res);
      })
    }
  }

}
