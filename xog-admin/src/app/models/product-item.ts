export interface IProductItem {
  Id: number,
  SubCategoryId: number,
  SubCategoryName: string,
  BrandName: string,
  BrandId: number,
  ProductName: string,
  Mrp: number,
  Measure: number,
  Volume: String,
  StocksAvailable: number,
  Gst: number,
  Cost: number,
  MaxPurchase: number,
  Available: number,
  DiscountPercentage: number,
  Description: String,
  ProductImages: String[],
  CartCount: number;
}

export class ICartItem { 
  ProductId!: number;
  CartCount!: number; 
}


