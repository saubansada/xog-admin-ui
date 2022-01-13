
export class Address {
    
    Id: number;
    AddressOfUserId: string;
    FullName: string;
    PhoneNumber: string;
    AreaCode: string;
    AddressLine1: string;
    AddressLine2: string;
    LandMark: string;
    Country: string;
    GPS: string;
    IsDefault: boolean;
}

export class AddressFilter {
    UserId: string;
}