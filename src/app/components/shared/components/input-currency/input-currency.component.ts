import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'lib-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: InputCurrencyComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputCurrencyComponent
    }
  ],
})
export class InputCurrencyComponent implements ControlValueAccessor, Validator {
  @Input()
  public label: string = "";

  private inputValue: number | null = null

  public formControl!: FormControl<number | null>;

  private onChange = (inputValue: number | null) => {inputValue};

  private onTouched = () => {};

  private touched = false;

  public disabled = false;

  public writeValue(value: number | null): void {
    this.inputValue = value;
  }

  public registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched
  }

  public setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  public validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (!this.formControl) {
      this.formControl = control as FormControl<number | null>;
      this.formControl.setValue(this.inputValue);
    }
    return control.valid ? null : control.errors;
  }

  public onBlur(): void {
    this.markAsTouched();
    
  }

  public onInput(): void {
    this.onChange(this.formControl.value);
  }

  private markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
      this.formControl.markAsTouched();
    }
  }
}
