import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';
import { Deal, DealFilter, DealType } from '../../models';

@Component({
  selector: 'app-deal-table-filter',
  templateUrl: './deal-table-filter.component.html',
  styleUrls: ['./deal-table-filter.component.scss']
})

export class DealTableFilterComponent implements OnInit {
  @Output()
  filter = new EventEmitter<Partial<Deal> | null>();

  public filterForm: FormGroup<DealFilter> = this.formBuilder.group({
      dealName: "",
      dealType: new FormControl<DealType | null>(null),
      purchasePrice: new FormControl<number | null>(null),
      address: "",
      netOperatingIncome: new FormControl<number | null>(null),
      capRate: new FormControl<number | null>(null),
    },
    { validators: [this.twoFieldsRequired()] }
  );

  public filtersAmount = 0;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.filterForm.valueChanges.subscribe(() => {
      this.filtersAmount = this.getTruthyControlValuesAmount(this.filterForm);
    });
  }

  public doFilter(): void {
    const formValue = this.filterForm.value;
    const filter = Object.entries(formValue).filter(item => !!item[1]).reduce((acc, item) => {
      acc[item[0]] = item[1];
      return acc;
    }, {} as Record<string, string | number | null>);
    this.filter.emit(filter);
  }

  public doClean(): void {
    this.filterForm.reset();
    this.filter.emit(null);
  }

  public outputPercentTransformFn = (value: string | number | null | undefined): number | null => {
    if (typeof value === "string") {
      const valueWithoutSufix = value.slice(0, value.length - 1);
      const valuenumber = Number(valueWithoutSufix);
      return valuenumber / 100;
    }
    return null;
  };

  private getTruthyControlValuesAmount(form: FormGroup<DealFilter>): number {
    return Object.values(form.controls).filter(control => !!control.value).length;
  }

  private twoFieldsRequired(): ValidatorFn {
    return (control: AbstractControl) => {
      const truthyValuesAmount = this.getTruthyControlValuesAmount(control as FormGroup<DealFilter>);
      return truthyValuesAmount >= 2 ? null : { requireTwoFields: true }
    }
  }
}
