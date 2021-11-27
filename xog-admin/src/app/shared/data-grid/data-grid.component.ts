import { Component, Input, OnInit, TemplateRef } from '@angular/core';

export class AppGridColDef {
  field!: string;
  text!: string;
  displayed?: boolean = true;
  content?: TemplateRef<any>;
  classes?: string;
}

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  private _columnDefs: AppGridColDef[] = [];

  @Input() 
  private height?: string;

  @Input()
  public gridData?: any[];

  @Input()
  set columnDefs(_columnDefs: AppGridColDef[]) {
    this._columnDefs = _columnDefs;
  }
  get columnDefs(): AppGridColDef[] {
    return this._columnDefs;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
