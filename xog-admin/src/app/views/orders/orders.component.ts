import { Component, OnInit, ViewChild } from '@angular/core';
import * as dayjs from 'dayjs';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor() { }
  title = 'Pure angular daterangepicker';
  options: any = {
    autoApply: false,
    alwaysShowCalendars: false,
    showCancel: false,
    showClearButton: false,
    linkedCalendars: true,
    singleDatePicker: false,
    showWeekNumbers: false,
    showISOWeekNumbers: false,
    customRangeDirection: false,
    lockStartDate: false,
    closeOnAutoApply: true
  };

  minDate: dayjs.Dayjs = dayjs().subtract(5, 'days');
  maxDate: dayjs.Dayjs = dayjs().add(2, 'month');
  locale: any = {
    format: 'YYYY-MM-DDTHH:mm:ss.SSSSZ',
    displayFormat: 'DD MMMM YYYY HH:mm',
    separator: ' To ',
    cancelLabel: 'Cancel',
    applyLabel: 'Okay'
  }

  ngOnInit(): void {
  }


}
