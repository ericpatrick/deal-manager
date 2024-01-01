import { FormControl } from "@angular/forms"
import { DealType } from "./deal.model"

export interface DealFilter {
  dealName: FormControl<string | null>;
  dealType: FormControl<DealType | null>;
  purchasePrice: FormControl<number | null>;
  address: FormControl<string | null>;
  netOperatingIncome: FormControl<number | null>;
  capRate: FormControl<number | null>;
}