import { Address } from "./address";

export class Order {
    
    Id: number;
    PhoneNumber: string;
    UserId: string;
    TimePeriod: number;
    RelDay: number;
    IsDelivery: boolean;
    OrderDate: Date;
    OrderState: OrderStatus;
    DispatchedDate: Date;
    DeliveryDate: Date;
    Purchases: OrderDetail[];
    SumAmount: number;
    Gst: number;;
    TotalBill: number;
    Enabled: boolean;
    Address: Address;
}

export class OrderDetail { 
    Id: number;
    ProductName: string;
    Quantity: number;
    Price: number;
    Discount: number;
    Gst: number;
    Total: number;
}

export enum OrderStatus
{
    All = 0,
    Placed = 1,
    Confirmed = 2,
    Packed = 3,
    Dispatched = 4,
    Delivered = 5,
    Cancelled = 6,
    Rejected = 7
}
  
export class OrderFilter {

}