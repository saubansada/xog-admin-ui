import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ResponseObject, Result } from 'src/app/models/common';
import { SettingsService } from 'src/app/services/settings.service';
import { BaseComponent } from 'src/app/shared/base.component';
import { AppGridColDef } from 'src/app/shared/data-grid/data-grid.component';

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.scss']
})
export class TaxesComponent extends BaseComponent implements OnInit {

  gridData!: any[];

  @ViewChild('inputColumn', { read: TemplateRef, static: false }) inputColumnRef!: TemplateRef<any>;

  @ViewChild('deleteColumn', { read: TemplateRef, static: false }) deleteColumnRef!: TemplateRef<any>;

  @ViewChild('slColumn', { read: TemplateRef, static: false }) slColumnRef!: TemplateRef<any>;

  columnDefs!: AppGridColDef[];

  constructor(protected injector: Injector, protected settingService: SettingsService) { super(injector); }

  ngOnInit(): void {
    this.settingService.getTaxes().subscribe(res => {
      let list: string[] = (res.Data ?? "").split(',');
      this.gridData = [];

      list.forEach((item, index) => {
        this.gridData.push({
          Id: index,
          Value: item,
        })
      });
      this.initColumnDefs();
    })
  }

  initColumnDefs() {
    this.columnDefs = [
      // { text: "Id", field: "Id", content: this.slColumnRef },
      { text: "Tax", field: "Value", content: this.inputColumnRef },
      { text: "", field: "Edit", content: this.deleteColumnRef }
    ];
  }

  add() {
    this.gridData = this.gridData ?? [];
    this.gridData.push({
      Id: this.gridData.length,
      Value: 0,
    })
  }

  remove(index: number) {
    if (this.gridData.length == 1) {
      var res = new ResponseObject<any>();
      res.Message = "At least 1 tax value is required";
      res.Result = Result.Failure;
      this.showMessage(res);
      return;
    }
    this.gridData.splice(index, 1);
  }

  save() {
    var data = {
      Taxes: this.gridData.map(i => i.Value).join(",")
    }
    this.settingService.saveTaxes(data).subscribe(() => {
      this.hideSpinner();
    });
  }
}
