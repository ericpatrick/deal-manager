import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './services';
import { delay } from 'rxjs';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DealListComponent implements OnInit {
  public title$ = this.headerService.title$.pipe(delay(0));
  public returnToPrevious$ = this.headerService.returnToPrevious$.pipe(delay(0));

  constructor(
    public headerService: HeaderService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  public backToPreviousPage(): void {
    this.router.navigate([".."]);
  }
}
