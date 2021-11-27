import { BaseFiler } from "./common";

export class ProductGroup {
    
    Id!: number;
    RouteKey!: string;
    CategoryId!: number;
    CategoryName!: string;
    ProductGroupName!: string;
    ProductGroupDescription!: string;
}

export class ProductGroupFilter extends BaseFiler {

    Search!: string;
    SubCategoryId!: number;
    Ids!: string;
}