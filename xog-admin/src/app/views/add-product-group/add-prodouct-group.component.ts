import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ResponseObject } from 'src/app/models/common';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductGroupsService } from 'src/app/services/product-groups.service';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';
import { BaseComponent } from 'src/app/shared/base.component';

declare var UIkit: any;

@Component({
  selector: 'add-product-group',
  templateUrl: './add-product-group.component.html',
  styleUrls: ['./add-product-group.component.scss']
})
export class AddProductGroupComponent extends BaseComponent implements OnInit {

  isEdit: boolean = false;
  categoryList: any[] = [];
  subCategoryList: any[] = [];

  formInstance: FormGroup = this.fb.group({
    Id: [],
    CategoryId: [-1, [Validators.required, Validators.min(0)]],
    SubCategoryId: [-1, [Validators.required, Validators.min(0)]],
    ProductGroupName: [null, Validators.required],
    ProductGroupDescription: []
  });

  get categoryId() { return this.formInstance.get("CategoryId"); }
  get subCategoryId() { return this.formInstance.get("SubCategoryId"); }

  constructor(protected injector: Injector, private subCategoryService: ProductGroupsService,
    private categoriesService: CategoriesService,
    private subCategoriesService: SubCategoriesService) {
    super(injector);

    this.route.paramMap.subscribe(res => {
      var id = <any>res.get("id");
      this.isEdit = false;
      if (id != null && !isNaN(id)) {
        this.loadProductGroup(id);
        this.isEdit = true;
      }
    });
  }

  ngOnInit(): void {
    this.categoriesService.getCategoriesDropdown().subscribe((res: ResponseObject<any>) => {
      this.categoryList = res.Data;
    });
    this.subCategoriesService.getSubCategoriesDropdown().subscribe((res: ResponseObject<any>) => {
      this.subCategoryList = res.Data;
    })
  }

  loadProductGroup(id: number) {
    this.subCategoryService.getProductGroupInfo(id).subscribe((res: ResponseObject<any>) => {
      let data = res.Data;
      this.formInstance.patchValue(data);
    });
  }

  submitForm() {
    if (this.isEdit) {
      this.subCategoryService.editProductGroupInfo(this.formInstance.value).subscribe();
    } else {
      this.subCategoryService.addProductGroupInfo(this.formInstance.value).subscribe();
      this.resetForm();
    }
  }
  resetForm() {
    this.formInstance.reset({
      SubCategoryId: -1,
      CategoryId: -1,
    });
  }

}
