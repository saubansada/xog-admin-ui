import { KeyValue } from '@angular/common';

export class BaseFiler {

    public SortBy!: string;
    public SortOrder!: string;
    public SearchKey!: string;
    public PageNumber!: number;
    public PageSize!: number;
}

export class MenuItems {
    orderNumber!: number;
    text!: string;
    url!: string;
    icon!: string;
    iconPosition?: string = "left";
    isActive!: boolean;
    visible?: boolean = true;
    isDefault?: boolean = false;
}

export class SideNavigation {
    orderNumber!: number;
    name!: string;
    menuItems!: MenuItems[];
    visible?: boolean = false;
}

export class ResponseObject<T> {
    IsSuccess?: boolean = false;
    Result!: Result;
    Message!: string;
    Data?: T;
}

export enum Result {
    ValidationError = 0,
    Success = 1,
    Failure = 2,
    Error = 3
}

export enum ProductDivision {
    None = -1,
    Grocery = 0,
    HygineAndCleaning = 1,
    PersonalCare = 2,
    BabiesAndKids = 3,
    Stationeries = 4,
    SportsAndFitnes = 5,
    HouseHoldItems = 6
}


// export enum MeasureType {
//     Unit,
//     Gram,
//     Kg,
//     Liter,
//     Ml,
//     Dozen,
//     Tray,
//     Large,
//     Small,
//     Medium,
//     LargePack,
//     SmallPack,
//     MediumPack,
//     Bundle
// }

export enum ProductQueryType {
    FilterOrNone,
    Suggestions,
    Featured,
    Trending,
    QuickSlides,
    Similars
}

export function enumToKeyValueArray(enumme: any) {
    return Object.keys(enumme)
        .filter(StringIsNotNumber)
        .map(k => {
            return { name: k, id: enumme[k] }
        });
}

export function transformCamelToSpaces(text: string) {
    const result = text.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
}

export const StringIsNotNumber = (value: any) => isNaN(Number(value)) === true;
