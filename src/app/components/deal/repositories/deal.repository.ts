import { Injectable } from "@angular/core";
import { v4 as uuidV4 } from "uuid";
import { Deal, DealDTO } from "../models";
import { dealListMockData } from "../mocks/deal-list.mock";

@Injectable({
  providedIn: "root"
})
export class DealRepository {
  private data: Deal[];

  constructor() {
    this.data = dealListMockData;
  }

  public getAll(): Deal[] {
    return this.data;
  }

  public getById(id: string): Deal | null {
    const deal = this.data.find(deal => deal.id === id);

    return !!deal ? deal : null;
  }

  public addAll(data: DealDTO[]): Deal[] {
    return data.map(item => this.add(item));
  }

  public add(data: DealDTO): Deal {
    const {
      dealName,
      dealType,
      purchasePrice,
      address,
      netOperatingIncome,
    } = data;
    const newDeal: Deal = {
      id: uuidV4(),
      dealName,
      dealType,
      purchasePrice,
      address,
      netOperatingIncome,
      capRate: this.calculateCapRate(netOperatingIncome, purchasePrice)
    }
    this.data.push(newDeal);
    
    return newDeal;
  }

  public update(id: string, data: DealDTO): Deal | null {
    const deal = this.data.find(item => item.id === id);
    if (deal) {
      const {
        dealName,
        dealType,
        purchasePrice,
        address,
        netOperatingIncome,
      } = data;
      deal.dealName = dealName;
      deal.dealType = dealType;
      deal.purchasePrice = purchasePrice;
      deal.address = address;
      deal.netOperatingIncome = netOperatingIncome;
      deal.capRate = this.calculateCapRate(netOperatingIncome, purchasePrice);

      return deal;
    }

    return null;
  }

  public remove(item: Deal): Deal | null {
    const index = this.data.findIndex(deal => deal.id === item.id);
    if (index !== -1) {
      const [deleted] = this.data.splice(index, 1);
      return deleted;
    }

    return null;
  }

  private calculateCapRate(netOperatingIncome: number, purchasePrice: number): number {
    const result = netOperatingIncome / purchasePrice - 1;
    return Number(result.toFixed(3));
  }
}