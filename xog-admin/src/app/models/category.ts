import { BaseFiler, ProductDivision } from "./common";

export class Category {
    
    Id!: number;
    RouteKey!: string;
    ProductDivision!: ProductDivision;
    CategoryName!: string;
    CategoryDescription!: string;
}

export class CategoryFilter extends BaseFiler {

    Search!: string;
    ProductDivision!: ProductDivision;
    Ids!: string;
}