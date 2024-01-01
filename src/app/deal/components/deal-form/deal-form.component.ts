import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DealService, HeaderService } from '../../services';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Deal, DealDTO, DealForm, DealType } from '../../models';
import { NotificationsService } from 'src/app/shared/components/notifications/services/notifications.service';

@Component({
  selector: 'app-deal-form',
  templateUrl: './deal-form.component.html',
  styleUrls: ['./deal-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DealFormComponent implements OnInit {
  public dealForEdition: Deal | null = null;
  public dealFormArray: FormArray<FormGroup<DealForm>> = this.formBuilder.array([
    this.createDealFormGroup()
  ]);

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, 
    private dealService: DealService,
    private headerService: HeaderService,
    private formBuilder: FormBuilder,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;
    if (id) {
      const deal = this.dealService.getDealById(id);
      if (!deal) {
        this.router.navigate([".."]);
        return;
      }
      this.headerService.change(`Edit deal: ${deal?.dealName}`, true);
      this.setForm(deal);
      this.dealForEdition = deal;
    } else {
      this.headerService.change("Create a new deal", true);
    }
  }

  public onSave(): void {
    if (this.dealFormArray.valid) {
      const data: DealDTO[] = this.formToDTO();
      if (this.dealForEdition) {
        this.dealService.updateDeal(this.dealForEdition.id, data[0]);
        this.notificationsService.open("Deal updated successfully!");
      } else {
        this.dealService.addDeal(data);
        this.notificationsService.open("Deal saved successfully!");
      }
      this.router.navigate([".."]);
      return;
    }
    this.notificationsService.open("Please, fill required fields!");
  }

  public onCancel(): void {
    this.dealFormArray.reset();
    this.router.navigate([".."]);
  }

  public addForm(): void {
    this.dealFormArray.insert(0, this.createDealFormGroup());
  }

  public removeForm(index: number): void {
    this.dealFormArray.removeAt(index);
  }

  private setForm(deal: Deal): void {
    const {
      dealName,
      dealType,
      purchasePrice,
      address,
      netOperatingIncome
    } = deal;
    this.dealFormArray.at(0).patchValue({
      dealName,
      dealType,
      purchasePrice,
      address,
      netOperatingIncome
    });
  }

  private createDealFormGroup(): FormGroup<DealForm> {
    return this.formBuilder.group({
      dealName: ["", Validators.required],
      dealType: new FormControl<DealType | null>(null, Validators.required),
      purchasePrice: new FormControl<number | null>(null, Validators.required),
      address: ["", Validators.required],
      netOperatingIncome: new FormControl<number | null>(null, Validators.required),
    })
  }

  private formToDTO(): DealDTO[] {
    return this.dealFormArray.controls.map(formGroup => {
      const formValue = formGroup.value;
      return {
        dealName: formValue.dealName as string,
        dealType: formValue.dealType as DealType,
        purchasePrice: formValue.purchasePrice as number,
        address: formValue.address as string,
        netOperatingIncome: formValue.netOperatingIncome as number
      }
    });
  }
}
