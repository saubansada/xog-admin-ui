import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { enumToKeyValueArray, ResponseObject, transformCamelToSpaces } from 'src/app/models/common';
import { Order, OrderDetail, OrderReturn, OrderReturnDetail, OrderStatus } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { BaseComponent } from 'src/app/shared/base.component';
import { environment } from 'src/environments/environment';
import * as dayjs from 'dayjs'; 

declare var UIkit: any;

export class ReturnOrderList {
  orderKey: string;
  TotalAmount: number;
  LargestProductName: string;
  orderDetail: OrderDetail[] = [];
}

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent extends BaseComponent implements OnInit {

  @Input() id: string;

  loadSpinner: string = "popupSpinner";

  index: number = 0;

  orderState: number = OrderStatus.Placed;

  mainPageIndex: number = 0;

  @Input() order: Order;

  @Output() updated: EventEmitter<any> = new EventEmitter<any>();

  isReturnedOrder: boolean = false;

  purchases: OrderDetail[] = [];

  returns: ReturnOrderList[] = [];

  isModified: boolean = false;

  setModifiedStatus() {
    if (this.order != null && this.purchases != null && this.purchases.length > 0) {
      this.isModified = this.returnedCounts > 0;
      this.index = this.isModified ? 1 : 0;
    }
  };

  get getMaxLengtName(): string {
    let largest = '';
    this.returns.forEach(i => {
       if(largest.length < i.LargestProductName.length) {
         largest = i.LargestProductName;
       }
    });
    return largest;
  }

  get returnSum(): number {
    let sum = 0;
    this.purchases.forEach(item => {
      if(item.ReturnedQuantity > 0) {
        sum += (item.ReturnedQuantity * item.DiscPrice);
      }
    })
    return sum;
  }

  get returnedCounts(): number {
    return (this.purchases.filter(k => k.ReturnedQuantity) ?? []).length;
  }

  uploadsUrl: string = environment.uploadsUrl;

  get orderStatusList(): any[] {
    return this.isReturnedOrder ? this.orderReturnStatusList : this.orderDetailStatusList;
  }

  get orderDetailStatusList(): any[] {
    let list = enumToKeyValueArray(OrderStatus);
    return list.filter(i => i.id != 0);
  }

  get orderReturnStatusList(): any[] {
    let list = enumToKeyValueArray(OrderStatus);
    return list.filter(i => i.id != 0 && [2, 8].indexOf(i.id) > -1);
  }

  camelCaseToSpacedText: typeof transformCamelToSpaces = transformCamelToSpaces;

  @Input() set orderId(id: number) {
    this.isReturnedOrder = false; 
    this.isModified = false;
    this.mainPageIndex= 0;
    this.index = 0;
    this.loadOrderInfo(id);
  }

  @Input() set returnOrderId(id: number) {
    this.isReturnedOrder = true;
    this.mainPageIndex= 0;
    this.index = 0;
    this.loadOrderInfo(id);
  }

  loadOrderInfo(id: number, callback?: any) {
    let dateFormat: string = 'DD-MMM-YYYY :: hh:mm:ss';
    this.shouldShowSpinner = false;
    this.order = <any>null;
    this.purchases = [];
    this.returns = []; 
    this.showSpinner(this.loadSpinner);
    if (id != null) {
      this.orderService.getOrderInfo(id, this.isReturnedOrder).subscribe((res: ResponseObject<Order>) => {
        let order = res.Data;
        if (order != null) {
          if (this.isReturnedOrder) {
            this.orderState = <number>(order?.OrderReturnState ?? OrderStatus.Placed);
          } else {
            this.orderState = <number>(order?.OrderState ?? OrderStatus.Placed);
          }
          order.Purchases.forEach((element, ind) => {
            if (order != null && order.Purchases[ind].ProductImage != null) {
              order.Purchases[ind].ProductImage.ImageUrl = element.ProductImage.ImageUrl.replace('~', '');
            }
            if (this.purchases.findIndex(i => i.Id == element.Id) == -1 && (element.OrderedQuantity - element.TotalReturnedQuantity - element.ReturnedQuantity) > 0) {
              let purchased = Object.assign({}, element);
              purchased.ReturnedQuantity = 0;
              this.purchases.push(purchased);
            }
            if (element.ReturnedQuantity > 0) {
              let day = dayjs(element.ReturnOrderDate).format(dateFormat)
              let keyIndex = this.returns.findIndex(i => dayjs(i.orderKey).format(dateFormat) === day);
              if (keyIndex == -1) {
                this.returns.push({
                  orderKey: day,
                  TotalAmount: 0,
                  LargestProductName: "",
                  orderDetail: []
                })
                keyIndex = this.returns.length - 1;
              }
              this.returns[keyIndex].orderDetail.push(Object.assign({}, element));
              this.returns[keyIndex].TotalAmount += element.ReturnTotalSum;
              if(this.returns[keyIndex].LargestProductName.length < element.ProductName.length) this.returns[keyIndex].LargestProductName = element.ProductName;
            }
          });
        } 
        this.order = <Order>order;
        this.hideSpinner(this.loadSpinner);
        this.setModifiedStatus();
        if(callback) callback();
      });
    }
    this.setModifiedStatus();
  }

  constructor(protected injector: Injector, private orderService: OrderService) {
    super(injector);
    this.shouldShowSpinner = false;
  }

  getAddress(): string {
    this.setModifiedStatus();
    if (this.order != null && this.order.Address != null) {
      let address = this.order.Address;
      return (address.AddressLine1 + ", " +
        address.AddressLine2 + ", " + address.LandMark + ", " + address.Country +
        (address.AreaCode == null || address.AreaCode.trim() == "" ? "." : " - " + address.AreaCode)).replace(/\b[a-z]/g, (x) => x.toUpperCase()) +
        "<br/>" + "Mob. +91" + address.PhoneNumber;
    } else {
      return "";
    }
  }

  ngOnInit(): void {
    this.setModifiedStatus();
    this.shouldShowSpinner = false;
  }

  updateOrderStatus() {
    this.showSpinner();
    let order = Object.assign({}, this.order);
    let ind = this.orderStatusList.findIndex(i => i.id == this.orderState);
    if (ind > -1) {
      order.OrderState = this.orderStatusList[ind].name;
    }
    if (!this.isReturnedOrder) {
      this.orderService.updateOrderStatus(order).subscribe((res: ResponseObject<any>) => {
        this.hideSpinner();
        this.loadOrderInfo(this.order.Id, () => {
          this.updated.emit();
        });
      });
    } else {
      let order = <OrderReturn>(<any>{
        ReturnId: this.order.ReturnId,
        OrderState: OrderStatus.Confirmed
      });
      this.orderService.updateOrderReturnStatus(order).subscribe((res: ResponseObject<any>) => {
        res.Message = "Order Return Updated Successfully!";
        this.hideSpinner();
        this.loadOrderInfo(this.order.ReturnId, () => {
          this.updated.emit();
        });
      })
    }
  }

  remove(item: OrderDetail) {
    if (item.ReturnedQuantity < item.TotalQuantity)
      item.ReturnedQuantity++;
    this.setModifiedStatus();
  }

  add(item: OrderDetail) {
    if (item.ReturnedQuantity > 0)
      item.ReturnedQuantity--;
    this.setModifiedStatus();
  }

  returnOrder() {
    this.showSpinner();
    let orderReturn: OrderReturn = new OrderReturn();
    orderReturn.OrderId = this.order.Id;
    orderReturn.ReturnOrderDetails = this.purchases.filter(i => i.ReturnedQuantity > 0).map(ele => {
      let detail = new OrderReturnDetail();
      detail.IsCancelled = false;
      detail.Quantity = ele.ReturnedQuantity;
      detail.OrderDetailsId = ele.Id;
      return detail;
    });

    this.orderService.initiateOrderReturns(orderReturn).subscribe((res: ResponseObject<any>) => {
      res.Message = "Order Return Initiated Successfully!";
      this.hideSpinner();
      this.loadOrderInfo(this.order.Id);
    })
  }
}
