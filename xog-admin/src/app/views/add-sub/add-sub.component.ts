import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ResponseObject } from 'src/app/models/common';
import { CategoriesService } from 'src/app/services/categories.service';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';
import { BaseComponent } from 'src/app/shared/base.component';

declare var UIkit: any;

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
    SubCategoryImages: [[]],
    SubCategoryDescription: []
  });

  constructor(protected injector: Injector, private subCategoryService: SubCategoriesService,
    private categoriesService: CategoriesService) {
    super(injector);

    this.route.paramMap.subscribe(res => {
      var id = <any>res.get("id");
      this.isEdit = false;
      if (id != null && !isNaN(id)) {
        this.loadSubCategory(id);
        this.isEdit = true;
      }
    });
  }

  ngOnInit(): void {
    this.categoriesService.getCategoriesDropdown().subscribe((res: ResponseObject<any>) => {
      this.categoryList = res.Data;
    })
  }

  loadSubCategory(id: number) { 
    this.subCategoryService.getSubCategoryInfo(id).subscribe((res: ResponseObject<any>) => {
      let data = res.Data;
      data.SubCategoryImages = data.SubCategoryImage == null ? [] : [data.SubCategoryImage];
      this.formInstance.patchValue(data); 
    });
  }

  submitForm() { 

    var data = this.formInstance.value;
    data.SubCategoryImage = data.SubCategoryImages?.length > 0 ? data.SubCategoryImages[0] : null;
    if (this.isEdit) {
      this.subCategoryService.editSubCategoryInfo(data).subscribe();
    } else {
      this.subCategoryService.addSubCategoryInfo(data).subscribe();
      this.resetForm();
    }
  }

  resetForm() {
    this.formInstance.reset({
      SubCategoryImages: [],
      CategoryId: -1,
    })
  }

}
