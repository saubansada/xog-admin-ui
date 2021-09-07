import { Category } from "./category";
import { BaseFiler, ProductDivision } from "./common";

export class SubCategory {
    
    Id!: number;
    RouteKey!: string;
    CategoryId!: number;
    CategoryName!: string;
    SubCategoryName!: string;
    SubCategoryDescription!: string;
}

export class SubCategoryFilter extends BaseFiler {

    Search!: string;
    CategoryId!: number;
    Ids!: string;
}