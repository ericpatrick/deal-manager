import { Deal } from "../models";
import { v4 as uuidV4 } from "uuid";

export const dealListMockData: Deal[] = [
  {
    id: uuidV4(),
    dealName: "Deal 01",
    dealType: "Acquisition",
    purchasePrice: 200000,
    address: "Louis St. Phoneix AZ",
    netOperatingIncome: 250000,
    capRate: 0.25
  },
  {
    id: uuidV4(),
    dealName: "Deal 02",
    dealType: "Development",
    purchasePrice: 160000,
    address: "Merry St. Los Angeles CA",
    netOperatingIncome: 220000,
    capRate: 0.375
  },
  {
    id: uuidV4(),
    dealName: "Deal 03",
    dealType: "Lease",
    purchasePrice: 840000,
    address: "Main St. Dallas TX",
    netOperatingIncome: 940000,
    capRate: 0.119
  },
  {
    id: uuidV4(),
    dealName: "Deal 04",
    dealType: "Acquisition",
    purchasePrice: 375000,
    address: "3rd St. Albany NY",
    netOperatingIncome: 410000,
    capRate: 0.093
  },
  {
    id: uuidV4(),
    dealName: "Deal 05",
    dealType: "Lease",
    purchasePrice: 2000000,
    address: "104 Elm St. Charleston WV",
    netOperatingIncome: 2800000,
    capRate: 0.4
  }
]