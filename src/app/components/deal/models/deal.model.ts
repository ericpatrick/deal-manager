/**
  Deal Name
  Deal Type (Acquisition, Lease, Development)
  Purchase Price ($)
  Address
  NOI (Net Operating Income) ($)
  Cap Rate = NOI / Purchase Price (%)
 */
export type DealType = "Acquisition" | "Lease" | "Development";

export interface Deal {
  id: string,
  dealName: string;
  dealType: DealType;
  purchasePrice: number;
  address: string;
  netOperatingIncome: number;
  capRate: number;
}