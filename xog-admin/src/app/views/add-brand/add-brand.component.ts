import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { ProductDivision, ResponseObject, enumToKeyValueArray, transformCamelToSpaces } from 'src/app/models/common';
import { BrandsService } from 'src/app/services/brands.service';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.scss']
})
export class AddBrandComponent extends BaseComponent implements OnInit {

  isEdit: boolean = false;

  divisionList: any[] = enumToKeyValueArray(ProductDivision);

  camelCaseToSpacedText: typeof transformCamelToSpaces = transformCamelToSpaces;

  formInstance: FormGroup = this.fb.group({
    Id: [],
    BrandUrl: [''],
    BrandName: ['', Validators.required],
    BrandImages: [[]],
    BrandDescription: []
  });

  constructor(protected injector: Injector,
    private brandService: BrandsService) {
    super(injector);

    this.route.paramMap.subscribe(res => {
      var id = <any>res.get("id");
      this.isEdit = false;
      if (id != null && !isNaN(id)) {
        this.loadBrand(id);
        this.isEdit = true;
      }
    });
  }

  ngOnInit(): void {
  }

  loadBrand(id: number) {
    this.brandService.getBrandInfo(id).subscribe((res: ResponseObject<any>) => {
      let data = res.Data;
      data.BrandImages = data.BrandImage == null ? [] : [data.BrandImage];
      this.formInstance.patchValue(data);
    });
  }

  submitForm() {
    var data = this.formInstance.value;
    data.BrandImage = data.BrandImages?.length > 0 ? data.BrandImages[0] : null;
    if (this.isEdit) {
      this.brandService.editBrandInfo(data).subscribe();
    } else {
      this.brandService.addBrandInfo(data).subscribe();
      this.resetForm();
    }
  }

  resetForm(){
    
    this.formInstance.reset({
      BrandImages: []
    });
  }
}
