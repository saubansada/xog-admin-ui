import { Component, Injector, Input, OnInit } from '@angular/core';
import { ResponseObject } from 'src/app/models/common';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order.service';
import { BaseComponent } from 'src/app/shared/base.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent extends BaseComponent implements OnInit {

  @Input() id: string;

  loadSpinner: string = "popupSpinner";

  @Input() order?: Order;

  @Input() set orderId(id: number) {
    this.shouldShowSpinner = false;
    this.showSpinner(this.loadSpinner);
    if (id != null) {
      this.orderService.getOrderInfo(id).subscribe((res: ResponseObject<Order>) => {
        this.order = res.Data;
        this.hideSpinner(this.loadSpinner);
      });
    }
  }

  constructor(protected injector: Injector, private orderService: OrderService) {
    super(injector);
    this.shouldShowSpinner = false;
  }

  getAddress(): string {
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
    this.shouldShowSpinner = false; 
  }
}
