import { Product } from "./product";

export class Offer {
    Id: number;
    DisplayName: string;
    Description: string;
    OfferStatus: OfferState;
    OfferDetails: OfferDetail[];
}

export class OfferBanner {
    Id: number;
    DisplayName: string;
    Description: string;
    OfferStatus: OfferState;
    BannerImageUrl: string;
    OfferUrl: string;
    Placement: OfferBannerPlacement;
    OfferId: number;
}

export enum OfferBannerPlacement {
    All = 0,
    DesktopHome = 1,
    DesktopOffers = 2,
    MobileStatus = 3,
    MobileOffers = 4
}

export class OfferDetail {
    Id: number;
    OfferId: number;
    ProductId: number;
    Product: Product;
}

export class OfferFilter {
    Id: number;
    Search: string;
    OfferDateStart: Date;
    OfferDateEnd: Date;
    ItemsCountStart: number;
    ItemsCountEnd: number;
    OfferStatus: OfferState;
    IsAdminRequest: boolean;
}

export enum OfferState {
    All = 0,
    Active = 1,
    InActive = 2
}