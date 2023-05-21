export class RedeemRequest {
      
    Id: number;
    RequestedByUserId: string;
    BankAccountNumber: string;
    PhoneNumber: string;
    RequestedUserFullName: string;
    BankAccountId: number;
    BankName: string;
    IFSCCode: string;
    AccountName: string;
    Amount: number;
    RequestState: number;
    RequestDateTime: Date;
    RequestCompletionDateTime: Date; 
}

export enum ReemRequestStatus
{
    All = 0,
    Requested = 1, 
    Approved = 2,
    Rejected = 3,
    UnderProcess = 4,
    Processed = 5
}