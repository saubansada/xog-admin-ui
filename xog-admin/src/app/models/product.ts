import { ProductQueryType } from "./common";

export class ProductView {
  Id!: number;
  ProductId!: number;
  ProductCode!: string;
  SubCategoryId!: number;
  SubCategoryName?: string;
  BrandName?: string;
  BrandId!: number;
  ProductName!: string;
  Description!: String;
  ProductImages?: String[];
  Mrp!: number;
  Measure!: number;
  Volume!: string;
  StocksAvailable!: number;
  Gst!: number;
  Cost!: number;
  MaxPurchase!: number;
  Available!: number;
  DiscountPercentage!: number;
}

export class Product {
  Id!: number;
  ProductCode!: string;
  SubCategoryId!: number;
  SubCategoryName?: string;
  BrandName?: string;
  BrandId!: number;
  ProductName!: string;
  Description!: String;
  ProductImages?: String[];
  ProductVariants!: ProductVariant[];
}


export class ProductImage {
  Id: number;
  ProductId: number;
  ImageUrl: string;
}

export class ProductVariant {
  Id!: number;
  ProductId!: number;
  Mrp!: number;
  Measure!: number;
  Volume!: string;
  StocksAvailable!: number;
  Gst!: number;
  Cost!: number;
  MaxPurchase!: number;
  Available!: number;
  DiscountPercentage!: number;
}

export class ProductFilter {
  Search?: string;
  ProductCode?: string;
  Ids?: string;
  SubCategoryId?: number;
  MainCategoryKey?: string;
  CategoryKey?: string;
  SubCategoryKey?: string;
  BrandId?: number;
  Enabled: boolean = true;
  ProductQueryType: ProductQueryType = ProductQueryType.FilterOrNone;

}

