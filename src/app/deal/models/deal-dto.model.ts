import { DealType } from "./deal.model";

export interface DealDTO {
  dealName: string;
  dealType: DealType;
  purchasePrice: number;
  address: string;
  netOperatingIncome: number;
}