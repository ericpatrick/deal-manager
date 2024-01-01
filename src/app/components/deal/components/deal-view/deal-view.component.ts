import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DealService, HeaderService } from '../../services';
import { Deal } from '../../models';

@Component({
  selector: 'app-deal-view',
  templateUrl: './deal-view.component.html',
  styleUrls: ['./deal-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DealViewComponent implements OnInit {
  public deal!: Deal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dealService: DealService,
    private headerService: HeaderService,
  ) {}

  ngOnInit(): void {
      const {id} = this.activatedRoute.snapshot.params
      if (!id) {
        this.router.navigate([".."]);
        return;
      }
      
      const deal = this.dealService.getDealById(id);
      if (!deal) {
        this.router.navigate([".."]);
        return;
      }
      this.deal = deal;
      this.headerService.change(deal.dealName, true);
  }

  public backToPreviousPage(): void {
    this.router.navigate([".."]);
  }
}
