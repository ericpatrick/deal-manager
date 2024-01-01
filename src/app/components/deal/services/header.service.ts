import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  title$ = new Subject<string>();
  returnToPrevious$ = new Subject<boolean>();
  constructor() { }

  public change(title: string, returnToPrevious: boolean): void {
    this.title$.next(title);
    this.returnToPrevious$.next(returnToPrevious);
  }
}
