import { Component, Injector, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { enumToKeyValueArray, ProductDivision, ResponseObject, transformCamelToSpaces } from 'src/app/models/common';
import { User, UserFilter } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { WalletsService } from 'src/app/services/wallet.service';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss']
})
export class AddWalletComponent extends BaseComponent implements OnInit {

  isEdit: boolean = false;

  divisionList: any[] = enumToKeyValueArray(ProductDivision);

  camelCaseToSpacedText: typeof transformCamelToSpaces = transformCamelToSpaces;

  customerList: any[] = [];

  formInstance: FormGroup = this.fb.group({
    Id: [],
    UserId: ['', Validators.required],
    TransactionType: [''],
    Amount: [],
    Description: []
  });

  constructor(protected injector: Injector,
    private walletService: WalletsService, private services: UsersService) {
    super(injector);

    this.route.paramMap.subscribe(res => {
      var id = <any>res.get("id");
      this.isEdit = false;
      if (id != null && !isNaN(id)) {
        this.isEdit = true;
      }
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.services.getUsersDropdown().subscribe((res: ResponseObject<User[]>) => {
      this.customerList = res.Data ?? [];
      let i = 0;
      res.Data?.forEach(item => {
        item.Sequence = ++i;
      })
    })
  }

  submitForm() {
    var data = this.formInstance.value;
    if (this.isEdit) {
      this.walletService.editWalletInfo(data).subscribe();
    } else {
      this.walletService.addWalletInfo(data).subscribe();
      this.resetForm();
    }
  }

  resetForm() {

    this.formInstance.reset({
      WalletImages: []
    });
  }
}
