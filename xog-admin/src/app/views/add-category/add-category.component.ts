import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { ProductDivision, ResponseObject, enumToKeyValueArray, transformCamelToSpaces } from 'src/app/models/common';
import { CategoriesService } from 'src/app/services/categories.service';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent extends BaseComponent implements OnInit {

  isEdit: boolean = false;

  divisionList: any[] = enumToKeyValueArray(ProductDivision);

  camelCaseToSpacedText: typeof transformCamelToSpaces = transformCamelToSpaces;

  formInstance: FormGroup = this.fb.group({
    Id: [],
    CategoryName: ['', Validators.required],
    CategoryImages: [[]],
    CategoryBanners: [[]],
    CategoryDescription: ['']
  });

  constructor(protected injector: Injector,
    private categoryService: CategoriesService) {
    super(injector);

    this.route.paramMap.subscribe(res => {
      var id = <any>res.get("id");
      this.isEdit = false;
      if (id != null && !isNaN(id)) {
        this.loadCategory(id);
        this.isEdit = true;
      }
    });
  }

  ngOnInit(): void {
  }

  loadCategory(id: number) {
    this.categoryService.getCategoryInfo(id).subscribe((res: ResponseObject<any>) => {
      let data = res.Data;
      data.CategoryImages = data.CategoryImage == null ? [] : [data.CategoryImage];
      data.CategoryBanners = data.CategoryBanner == null ? [] : [data.CategoryBanner];
      this.formInstance.patchValue(data);
    });
  }

  submitForm() {

    var data = this.formInstance.value;
    data.CategoryImage = data.CategoryImages?.length > 0 ? data.CategoryImages[0] : null;
    data.CategoryBanner = data.CategoryBanners?.length > 0 ? data.CategoryBanners[0] : null;

    if (this.isEdit) {
      this.categoryService.editCategoryInfo(data).subscribe();
    } else {
      this.categoryService.addCategoryInfo(data).subscribe();
      this.resetForm();
    }
  }

  resetForm(){
    this.formInstance.reset({
      CategoryImages: [],
      CategoryBanners: []
    })
  }
}
