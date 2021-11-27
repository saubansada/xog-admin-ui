import { BaseFiler } from "./common";

export class Brand {
      Id!: number;
      BrandName!: string;
      BrandUrl!: string;
      BrandDescription!: string;
}


export class BrandFilter extends BaseFiler {

    Search!: string;
    Ids!: string;
}