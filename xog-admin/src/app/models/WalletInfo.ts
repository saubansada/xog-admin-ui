import { BaseFiler } from "./common";

export class Wallet {
      Id!: number;
      UserName!: string;
      Amount!: string;
      BrandUrl!: string;
      BrandDescription!: string;
} 

export class WalletFilter {
      UserName!: string;
}