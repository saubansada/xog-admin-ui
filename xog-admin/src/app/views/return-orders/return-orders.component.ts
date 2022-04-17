import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import * as dayjs from 'dayjs';
import { enumToKeyValueArray, ProductDivision, ResponseObject, transformCamelToSpaces } from 'src/app/models/common';
import { Order, OrderFilter, OrderStatus } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { BaseComponent } from 'src/app/shared/base.component';
import { AppGridColDef } from 'src/app/shared/data-grid/data-grid.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-return-orders',
  templateUrl: './return-orders.component.html',
  styleUrls: ['./return-orders.component.scss']
})
export class ReturnOrdersComponent extends BaseComponent implements OnInit {

  selectedOrderId: number;

  returnOrderState: number = <number>OrderStatus.Pending;

  columnDefs!: AppGridColDef[];

  orderDetailModal: string = "order-details-modal";

  @ViewChild('orderStateColumn', { read: TemplateRef }) orderStateColumnRef!: TemplateRef<any>;
  @ViewChild('isDeliveryColumn', { read: TemplateRef }) isDeliveryColumnRef!: TemplateRef<any>;
  @ViewChild('timePeriodColumn', { read: TemplateRef }) timePeriodColumnRef!: TemplateRef<any>;
  @ViewChild('moreColumn', { read: TemplateRef }) moreColumnRef!: TemplateRef<any>;

  divisionList: any[] = enumToKeyValueArray(ProductDivision);

  camelCaseToSpacedText: typeof transformCamelToSpaces = transformCamelToSpaces;

  constructor(protected injector: Injector, private orderService: OrderService) {
    super(injector);
  }

  isLoading: boolean = false;

  title = 'Pure angular daterangepicker';
  minDate: dayjs.Dayjs = dayjs().subtract(5, 'days');
  maxDate: dayjs.Dayjs = dayjs().add(2, 'month');
  locale = environment.dayjsConfig;


  get orderDetailStatusList(): any[] {
    let list = enumToKeyValueArray(OrderStatus);
    return list.filter(i => i.id != 0);
  }

  get orderReturnStatusList(): any[] {
    let list = enumToKeyValueArray(OrderStatus);
    return list.filter(i => i.id != 0 && [2, 8].indexOf(i.id) > -1);
  }

  ngOnInit(): void {
    this.shouldShowSpinner = false;
    this.getReturnOrderList(this.returnOrderState);
  }

  filterReturnOrderList(event: any) {
    this.returnOrderState = event;
    this.getReturnOrderList(event);
  }

  getReturnOrderList(status: number) {
    this.showSpinner();
    this.isLoading = true;
    let filter: OrderFilter = new OrderFilter();
    filter.IsReturnedOrder = true;
    filter.OrderState = status;
    this.orderService.getOrderList(filter).subscribe((res: ResponseObject<Order[]>) => {
      this.hideSpinner();
      //this.generateDummyData();
      this.gridData = res.Data ?? [];
      //console.log(JSON.stringify(res.Data));
      this.initColumnDefs();
      this.isLoading = false;
    });
  }

  getAddress(order: Order): string {
    if (order != null && order.Address != null) {
      let address = order.Address;
      return (address.FullName + " - " + address.AddressLine1 + ", " +
        address.AddressLine2 + ", " + address.LandMark + ", " + address.Country +
        (address.AreaCode == null || address.AreaCode.trim() == "" ? "." : " - " + address.AreaCode)).replace(/\b[a-z]/g, (x) => x.toUpperCase()) +
        "<br/>" + "Mob. +91" + address.PhoneNumber;
    } else {
      return "";
    }
  }

  getOrderState(order: Order): string {
    if (order != null) {
      return OrderStatus[<number>order?.OrderState];
    } else {
      return "NA";
    }
  }


  getTimePeriod(order: Order) {
    return "15.07.2022- <span>4:00 to 12:00</span>";
  }

  viewOrder(order: Order) {
    if (order != null) {
      this.selectedOrderId = order?.ReturnId;
      this.showModal("#" + this.orderDetailModal);
    }
  }

  gridData: Order[];

  initColumnDefs() {
    this.columnDefs = [
      { text: "Return Id", field: "ReturnId" },
      { text: "Ordered Id", field: "Id" },
      { text: "Name", field: "PhoneNumber" },
      { text: "Total Bill", field: "TotalBill", content: this.isDeliveryColumnRef },
      { text: "P. Mode", field: "IsDelivery" },
      {
        text: "", field: "Menu", classes: "uk-text-right", content: this.moreColumnRef
      }
    ];
  }

  orderUpdated() {
    this.getReturnOrderList(this.returnOrderState);
  }
}
