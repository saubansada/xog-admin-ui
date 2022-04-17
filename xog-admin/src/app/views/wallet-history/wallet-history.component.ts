import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ResponseObject, transformCamelToSpaces } from 'src/app/models/common';
import { Wallet, WalletFilter } from 'src/app/models/WalletInfo';
import { WalletsService } from 'src/app/services/wallet.service';
import { BaseComponent } from 'src/app/shared/base.component';
import { AppGridColDef } from 'src/app/shared/data-grid/data-grid.component';

@Component({
  selector: 'app-wallet-history',
  templateUrl: './wallet-history.component.html',
  styleUrls: ['./wallet-history.component.scss']
})
export class WalletHistoryComponent extends BaseComponent implements OnInit {

  filter!: WalletFilter;

  gridData!: Wallet[]; 

  camelCaseToSpacedText: typeof transformCamelToSpaces = transformCamelToSpaces;

  @ViewChild('urlColumn', { read: TemplateRef }) urlColumnRef!: TemplateRef<any>; 

  @ViewChild('moreColumn', { read: TemplateRef }) moreColumnRef!: TemplateRef<any>;

  columnDefs!: AppGridColDef[];

  constructor(protected injector: Injector, private services: WalletsService) {
    super(injector)
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() { 
    this.services.getWalletList(this.filter).subscribe((res: ResponseObject<Wallet[]>) => {
      this.gridData = res.Data ?? [];
      this.initColumnDefs();
    })
  }

  deleteWallet(id: number) {
    this.services.deleteWallet(id).subscribe((res: ResponseObject<any>) => {
      this.loadData();
    })
  }

  editWallet(data: Wallet) {
    this.router.navigate(['/wallet/edit', data.Id]);
  }

  initColumnDefs() {
    this.columnDefs = [
      { text: "Id", field: "Id" },
      { text: "User Id", field: "UserId" },  
      { text: "Amount", field: "Amount" },
      { text: "Amount", field: "Amount" },
      {
        text: "", field: "Menu",
        classes: "uk-text-right",
        content: this.moreColumnRef
      }
    ];
  }

}
