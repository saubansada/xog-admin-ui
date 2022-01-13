import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { ResponseObject } from 'src/app/models/common';
import { QuantityMeasure, QuantityMeasureFilter } from 'src/app/models/quantity-measure';
import { QuantityMeasureService } from 'src/app/services/quantity-measure-service';
import { BaseComponent } from 'src/app/shared/base.component';
import { AppGridColDef } from 'src/app/shared/data-grid/data-grid.component';

declare var UIkit: any;

@Component({
  selector: 'app-quantity-measures',
  templateUrl: './quantity-measures.component.html',
  styleUrls: ['./quantity-measures.component.scss']
})
export class QuantityMeasuresComponent extends BaseComponent implements OnInit {

  private _isAdd: boolean = false;
  set isAddPage(val: boolean) {
    this._isAdd = val;
    this._isEdit = !val;
  }
  get isAddPage(): boolean {
    return this._isAdd;
  }

  private _isEdit: boolean = false;
  set isEditPage(val: boolean) {
    this._isEdit = val;
    this._isAdd = !val;
  }
  get isEditPage(): boolean {
    return this._isEdit;
  }

  filter!: QuantityMeasureFilter;

  gridData!: QuantityMeasure[];

  @ViewChild('moreColumn', { read: TemplateRef, static: false }) moreColumnRef!: TemplateRef<any>;

  columnDefs!: AppGridColDef[];
  
  modal: any;

  formInstance: FormGroup = this.fb.group({
    Id: [],
    QuantityMeasureName: ['', [Validators.required]],
    Acronym: ['', [Validators.required]]
  });

  constructor(protected injector: Injector, private services: QuantityMeasureService) {
    super(injector);

    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe((evt: NavigationEnd | any) => {

      if (this.modal != null) this.modal.hide();
      this.loadData();
      this.modal = UIkit.modal("#addModal");

      if (evt.url.endsWith("settings/quantity-measures/add")) {
        this.modal.show();
        this.formInstance.reset();
        this.isAddPage = true;

      } else if (evt.url.includes("settings/quantity-measures/edit")) {

        var id = evt.url.substring(evt.url.lastIndexOf("/") + 1, evt.url.length);
        if (id != null && !isNaN(id)) {

          this.modal.show();
          this.loadProductGroup(id);
          this.isEditPage = true;
          this.formInstance.reset();
        } else {
          this.modal.hide();
          this.router.navigate(['settings/quantity-measures']);
        }
      }
    })
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.modal.hide();
    this.router.navigate(["/settings/quantity-measures"])
  }

  loadData() {
    if (this.isAddPage || this.isEditPage) this.hideSpinner();
    this.services.getQuantityMeasureList(this.filter).subscribe((res: ResponseObject<QuantityMeasure[]>) => {
      this.gridData = res.Data ?? [];
      this.initColumnDefs();
    })
  }

  deleteQuantityMeasure(id: number) {
    this.services.deleteQuantityMeasure(id).subscribe((res: ResponseObject<any>) => {
      this.showMessage(res);
      this.loadData();
    })
  }

  loadProductGroup(id: number) {
    this.services.getQuantityMeasureInfo(id).subscribe((res: ResponseObject<any>) => {
      let data = res.Data;
      this.formInstance.patchValue(data);
    });
  }

  editQuantityMeasure(data: QuantityMeasure) {
    this.router.navigate(['/settings/quantity-measures/edit/', data.Id]);
  }

  submitForm() {
    if (this.isEditPage) {
      this.services.editQuantityMeasureInfo(this.formInstance.value).subscribe();
    } else {
      this.services.addQuantityMeasureInfo(this.formInstance.value).subscribe();
    }
    this.closeModal();
  }

  initColumnDefs() {
    this.columnDefs = [
      { text: "Id", field: "Id" },
      { text: "Measure", field: "QuantityMeasureName" },
      { text: "Acronym", field: "Acronym" },
      {
        text: "", field: "Menu",
        classes: "uk-text-right",
        content: this.moreColumnRef
      }
    ];
  }
}
