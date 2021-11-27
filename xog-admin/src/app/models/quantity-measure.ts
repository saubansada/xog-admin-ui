import { BaseFiler } from "./common";

export class QuantityMeasure {
    
    Id!: number;
    QuantityMeasureName!: string;
    Acronym!: string;
    Enabled: boolean = true;
}

export class QuantityMeasureFilter extends BaseFiler {

    Search!: string;
    Ids!: string;
}