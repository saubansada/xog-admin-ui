import { BaseFiler, UserType } from "./common";

export class User {
    Sequence: number = 0;
    Id!: string;
    UserType!: string;
    Email!: string;
    EmailConfirmed!: boolean;
    PasswordHash!: string;
    SecurityStamp!: string;
    PhoneNumber!: string;
    PhoneNumberConfirmed!: boolean;
    TwoFactorEnabled!: boolean;
    LockoutEndDateUtc!: Date;
    LockoutEnabled!: boolean;
    AccessFailedCount!: number;
    UserName!: string;
    FirstName!: string;
    LastName!: string;
    RegistrationDate!: Date;
    AlternateMobileNumber!: string;
    RoleIds: string[] = [];
}


export class UserFilter extends BaseFiler {

    Search!: string;
    ProductDivision!: UserType;
    Ids!: string;
}