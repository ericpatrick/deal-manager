import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Deal } from '../../models';

@Component({
  selector: 'app-deal-confirmation-modal',
  templateUrl: './deal-confirmation-modal.component.html',
  styleUrls: ['./deal-confirmation-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DealConfirmationModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DealConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Deal,
  ) {}

  onClick(deal: Deal | null): void {
    this.dialogRef.close(deal);
  }
}
