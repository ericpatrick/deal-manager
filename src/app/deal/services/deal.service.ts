import { Injectable } from '@angular/core';
import { Deal, DealDTO } from '../models';
import { DealRepository } from '../repositories/deal.repository';

@Injectable({
  providedIn: 'root'
})
export class DealService {
  constructor(private readonly dealRepository: DealRepository) {}

  public getDealList(): Deal[] {
    return this.dealRepository.getAll();
  }

  public getDealById(id: string): Deal | null {
    return this.dealRepository.getById(id);
  }

  public addDeal(data: DealDTO[]): Deal[] {
    return this.dealRepository.addAll(data);
  }

  public updateDeal(id: string, data: DealDTO): Deal | null {
    return this.dealRepository.update(id, data);
  }

  public removeDeal(deal: Deal): Deal | null {
    return this.dealRepository.remove(deal);
  }
}
