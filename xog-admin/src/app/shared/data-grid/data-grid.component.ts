import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef } from '@angular/core';

export class AppGridColDef {
  field!: string;
  text!: string;
  displayed?: boolean = true;
  content?: TemplateRef<any>;
  classes?: string;
  width?: number;
}

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {

  private _columnDefs: AppGridColDef[] = [];

  public viewPortItems: any;

  @Input()
  private height?: string;

  private _gridData?: any[];

  sumWidth: number = 0;

  @Input()
  public set gridData(_data: any[]) {

    if (_data != null) {
      let sum: number = 0;
      this._columnDefs.forEach((col: AppGridColDef, ind: number) => {
        let max = col.text.length;
        max = max < 5 ? 5 : max;
        _data.forEach((row: any, ind2: number) => {
          if (row[col.field] != null) {
            if (row[col.field].length > max) { max = row[col.field].length };
          }
        });
        col.width = (max * 10);
        sum += col.width;
      });
      this.sumWidth = sum;
      sum = sum == 0 ? 1 : sum;
      this._columnDefs.forEach(col => {
        col.width = ((col.width ?? 20) / this.sumWidth) * 100;
      })
    }
    this._gridData = _data;
  }

  public get gridData(): any[] {
    return this._gridData ?? [];
  }


  @Input()
  set columnDefs(_columnDefs: AppGridColDef[]) {
    if (_columnDefs != null && _columnDefs.length > 0) {
      _columnDefs.forEach(item => {
        let len = item.text.length;
        item.width = 100
      });
    }
    this._columnDefs = _columnDefs;
  }

  get columnDefs(): AppGridColDef[] {
    return this._columnDefs;
  }

  constructor(public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}
