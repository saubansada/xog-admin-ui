import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ResponseObject, transformCamelToSpaces, UserType } from 'src/app/models/common';
import { User, UserFilter } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { BaseComponent } from 'src/app/shared/base.component';
import { AppGridColDef } from 'src/app/shared/data-grid/data-grid.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent extends BaseComponent implements OnInit {
 
 
  constructor(protected injector: Injector, private services: UsersService) {
    super(injector)
  } 
  
  filter!: UserFilter;

  gridData!: User[];

  UserTypes: typeof UserType = UserType;

  camelCaseToSpacedText: typeof transformCamelToSpaces = transformCamelToSpaces;
  
  @ViewChild('moreColumn', { read: TemplateRef }) moreColumnRef!: TemplateRef<any>;

  columnDefs!: AppGridColDef[];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.services.getUserList(this.filter).subscribe((res: ResponseObject<User[]>) => {
      this.gridData = res.Data ?? [];
      let i = 0;
      res.Data?.forEach(item => {
        item.Sequence = ++i;
      })
      this.initColumnDefs();
    })
  }

  deleteUser(id: number) {
    this.services.deleteUser(id).subscribe((res: ResponseObject<any>) => {
      this.loadData();
    })
  }

  editUser(data: User) {
    //this.router.navigate(['/users/edit', data.Id]);
  }

  initColumnDefs() {
    this.columnDefs = [
      { text: "Sl. No.", field: "Sequence" },
      { text: "Email", field: "Email" },
      { text: "Phone Number", field: "PhoneNumber" },
      { text: "User Type", field: "UserType" },
      {
        text: "", field: "Menu",
        classes: "uk-text-right",
        content: this.moreColumnRef
      }
    ];
  }

}
