import {
  Component,
  Inject,
  InjectionToken,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { FlagComponent } from '../icon/flag/flag.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lai-country-select',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FlagComponent,
    MatTooltipModule,
    MatIconModule,
  ],
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss'],
})
export class CountrySelectComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() placeholder = '';
  @Input() tooltip: string | undefined;

  onChange!: (value: unknown) => void;
  onTouched!: () => void;

  selectedCountry?: Country;

  constructor(
    @Inject(COUNTRY_LIST)
    public readonly countryList: Country[],
    @Optional() @Self() private readonly ngControl: NgControl,
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  get required(): boolean {
    return this.ngControl.control?.hasValidator(Validators.required) ?? false;
  }

  writeValue(obj: string): void {
    if (!obj) {
      return;
    }

    this.selectedCountry = this.countryList.find(
      (country) => country.alpha2Code === obj,
    );
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  change(event: MatSelectChange): void {
    this.selectedCountry = this.countryList.find(
      (country) => country.alpha2Code === event.value,
    );
    this.onChange(event.value);
  }
}

export interface Country {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  numericCode: string | null;
  callingCode: string;
}

export const COUNTRY_LIST = new InjectionToken<Country[]>('_COUNTRIES');
