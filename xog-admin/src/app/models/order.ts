import { Address } from "./address";
import { ProductImage } from "./product";
import { QuantityMeasure } from "./quantity-measure";

export class Order {
    
    Id: number;
    PhoneNumber: string;
    ReturnId: number;
    UserId: string;
    TimePeriod: number;
    RelDay: number;
    IsDelivery: boolean;
    OrderDate: Date;
    OrderReturnState: OrderStatus;
    OrderState: OrderStatus;
    DispatchedDate: Date;
    DeliveryDate: Date;
    Purchases: OrderDetail[];
    Returns: OrderDetail[];
    SumAmount: number;
    Gst: number;
    TotalBill: number;
    Enabled: boolean;
    Address: Address;
}

export class ReturnOrder extends Order {
    OrderId: number;
    ReturnTotal: number;
}

export class OrderDetail { 
    Id: number;
    ReturnDetailId: number;
    OrderId: number;
    ProductVariantId: string;
    ProductName: string;
    UnitType: QuantityMeasure;
    ProductImage: ProductImage;
    TotalQuantity: number;
    OrderedQuantity: number;
    ReturnedQuantity: number;
    Price: number;
    DiscPrice: number;
    ReturnTotal: number;
    OrderedTotal: number;
    Total: number;
    Discount: number;
    Gst: number;
    ReturnOrderDate: Date;
    ReturnTotalSum: number;
    TotalReturnedQuantity: number;
}

export class OrderReturn {
    
    Id: number;
    OrderId: number;
    IsReturn: boolean;
    ReturnOrderDate: Date;
    ReturnOrderState: OrderStatus;
    ReturnOrderDetails: OrderReturnDetail[];
}

export class OrderReturnDetail { 
    Id: number;
    ReturnOrderId: number;
    OrderDetailsId: number;
    Quantity: number;
    IsCancelled: boolean;
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
    Rejected = 7,
    Pending = 8
}
  
export class OrderFilter {
    IsReturnedOrder: boolean;
    OrderState: OrderStatus;
}