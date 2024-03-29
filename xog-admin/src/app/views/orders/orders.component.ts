import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import * as dayjs from 'dayjs';
import { enumToKeyValueArray, ProductDivision, ResponseObject, transformCamelToSpaces } from 'src/app/models/common';
import { Order, OrderFilter, OrderStatus } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { BaseComponent } from 'src/app/shared/base.component';
import { AppGridColDef } from 'src/app/shared/data-grid/data-grid.component';
import { environment } from 'src/environments/environment';

declare var UIkit: any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent extends BaseComponent implements OnInit {

  selectedOrderId: number;

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

  title = 'Pure angular daterangepicker';
  minDate: dayjs.Dayjs = dayjs().subtract(5, 'days');
  maxDate: dayjs.Dayjs = dayjs().add(2, 'month');
  locale = environment.dayjsConfig;


  orderStatus: any = enumToKeyValueArray(OrderStatus);

  OrderStatus: typeof OrderStatus = OrderStatus;

  ngOnInit(): void {
    this.shouldShowSpinner = false;
    this.showSpinner();
    let filter: OrderFilter = new OrderFilter();
    filter.IsReturnedOrder = false;
    this.orderService.getOrderList(filter).subscribe((res: ResponseObject<Order[]>) => {
      this.hideSpinner();
      //this.generateDummyData();
      this.gridData = res.Data ?? [];
      //console.log(JSON.stringify(res.Data));
      this.initColumnDefs();
    }); 
  }

  initModal() {
    setTimeout(() => {
      let behaviour_id = "#" + this.orderDetailModal;
      let behaviour = UIkit.modal(behaviour_id);
      while (behaviour == undefined || behaviour == null) {
        behaviour = UIkit.modal(behaviour_id);
      }
      UIkit.util.on(behaviour_id, 'hidden', () => {
        this.selectedOrderId = -1;
      });
    }, 0);
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

  getOrderState(order: number): string {
    if (order != null) {
      return this.orderStatus.filter((i: any) => i.id = order)[0].name
    } else {
      return "NA";
    }
  }


  getDate(orderedDate: Date) {
    return orderedDate.toString().split('T')[0];
  }

  viewOrder(order: Order) {
    this.initModal();
    if (order != null) {
      this.selectedOrderId = order?.Id;
      this.showModal("#" + this.orderDetailModal);
    }
  }

  gridData: Order[];

  initColumnDefs() {
    this.columnDefs = [
      { text: "Id", field: "Id" },
      { text: "Ordered User", field: "PhoneNumber" },
      { text: "Deliver To", field: "PhoneNumber" },
      { text: "Delivery Type", field: "IsDelivery", content: this.isDeliveryColumnRef },
      //{ text: "P. Mode", field: "IsDelivery" },
      { text: "Ordered Date", field: "OrderedDate", content: this.timePeriodColumnRef },
      { text: "Delivery Time", field: "TimePeriodText" },
      { text: "Total ₹", field: "TotalBill" },
      { text: "Status", field: "OrderState", content: this.orderStateColumnRef },
      //{ text: "P. Status", field: "IsDelivery", content: this.isDeliveryColumnRef },
      {
        text: "", field: "Menu", classes: "uk-text-right", content: this.moreColumnRef
      }
    ];
  }




  // generateDummyData() {// let obj: Order =
  //   let obj = {
  //     Id: 5,
  //     UserId: "",
  //     PhoneNumber: "58585585858",
  //     TimePeriod: 0,
  //     RelDay: 0,
  //     IsDelivery: true,
  //     //OrderDate: "2021-12-06T01:49:29.367",
  //     OrderState: 2,
  //     // DispatchedDate: "2021-12-06T01:49:29.367",
  //     // DeliveryDate: "2021-12-06T01:49:29.367",
  //     Purchases: [
  //       {
  //         Id: 3,
  //         ProductName: "Tata Moong Daal",
  //         Quantity: 2,
  //         Price: 175,
  //         Discount: 0,
  //         Gst: 18,
  //         Total: 350
  //       },
  //       {
  //         Id: 4,
  //         ProductName: "Masoor Daal",
  //         Quantity: 1,
  //         Price: 32,
  //         Discount: 26,
  //         Gst: 18,
  //         Total: 23.68
  //       }
  //     ],
  //     SumAmount: 373.68,
  //     Gst: 0,
  //     TotalBill: 373.68,
  //     Address: {
  //       Id: 1,
  //       AddressOfUserId: "cf63163d-f691-45fe-bd24-b65ecf0b0014",
  //       FullName: "sada",
  //       PhoneNumber: "8867177465",
  //       AreaCode: "",
  //       AddressLine1: "some house",
  //       AddressLine2: "some address",
  //       LandMark: "some landmark",
  //       Country: "India",
  //       GPS: "",
  //       IsDefault: true,
  //     },
  //     "Enabled": true,
  //     OrderDate: new Date(),
  //     DispatchedDate: new Date(),
  //     DeliveryDate: new Date()
  //   };

  //   setTimeout(() => {
  //     let data = [];
  //     for (let j = 0; j < 700000; j++) {
  //       let val = Object.assign({}, obj)
  //       val.Id = j;
  //       data.push(val);
  //     }
  //     this.gridData = data;
  //   })
  //}
}
