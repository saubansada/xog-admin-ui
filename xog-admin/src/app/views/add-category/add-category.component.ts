import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ResponseObject } from 'src/app/models/common';
import { CategoriesService } from 'src/app/services/categories.service';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent extends BaseComponent implements OnInit {

  isEdit: boolean = false;

  formInstance: FormGroup = this.fb.group({
    CategoryName: ['', Validators.required],
    CategoryDescription: []
  });

  constructor(protected injector: Injector, private services: CategoriesService) {
    super(injector);
    let data = this.router.getCurrentNavigation()?.extras.state?.data;
    this.formInstance.patchValue(data);
    this.isEdit = data != null;
  }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.isEdit) {
      this.services.editCategoryInfo(this.formInstance.value).subscribe((res: ResponseObject<any>) => {
        this.showMessage(res);
      })
    } else {
      this.services.addCategoryInfo(this.formInstance.value).subscribe((res: ResponseObject<any>) => {
        this.showMessage(res);
      })
    }
  }
}
