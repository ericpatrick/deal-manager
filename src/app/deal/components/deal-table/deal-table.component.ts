import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { DealService, HeaderService } from '../../services';
import { Deal, DealFilter } from '../../models';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DealConfirmationModalComponent } from '../deal-confirmation-modal/deal-confirmation-modal.component';
import { Router } from '@angular/router';
import { Compare } from 'src/app/shared/utils';

@Component({
  selector: 'app-deal-table',
  templateUrl: './deal-table.component.html',
  styleUrls: ['./deal-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DealTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;
  
  dataSource = new MatTableDataSource<Deal>();
  displayedColumns: string[] = ["dealName", "dealType", "purchasePrice", "address", "netOperatingIncome", "capRate", "actions"];

  constructor(
    private dealService: DealService,
    private headerService: HeaderService,
    private dialog: MatDialog,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.dataSource.data = this.dealService.getDealList();
    this.headerService.change("Deal Manager", false);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public openDialog(deal: Deal): void {
    const dialogRef = this.dialog.open(DealConfirmationModalComponent, {
      data: deal,
      panelClass: "confirmation-dialog"
    });

    dialogRef.afterClosed().subscribe((result: Deal | null) => {
      if (result) {
        this.dealService.removeDeal(result);
        this.dataSource.data = this.dealService.getDealList();
      }
    });
  }

  public editDeal(deal: Deal): void {
    this.router.navigate([`edit/${deal.id}`]);
  }

  public addDeal(): void {
    this.router.navigate(["new"]);
  }

  public viewDeal(deal: Deal): void {
    this.router.navigate([`view/${deal.id}`]);
  }

  public applyFIlter(filter: Partial<Deal> | null): void {
    const data = this.dealService.getDealList();
    if (filter) {
      const result = data.filter(item => {
        return Object.keys(filter).every(key => {
          const itemValue = item[key as keyof Deal];
          const filterValue = filter[key as keyof Deal] as string | number
          const result = Compare.equalsOrIncludes(itemValue, filterValue);
          return result;
        });
      });
      this.dataSource.data = result;
    } else {
      this.dataSource.data = data;
    }
  }
}
