import { BaseFiler } from "./common";

export class Wallet {
      Id!: number;
      UserId!: string;
      Amount!: string;
      OrderAction!: string;
      TransactionType!: number;
      TimeStamp!: Date;
      TransactionId!: string;
} 

export class WalletFilter {
      UserName!: string;
}