import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgModel,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import {
  NumberFormat,
  formatNumber,
  isValidPhoneNumber,
  parseNumber,
  ParsedNumber,
  CountryCode,
  CountryCallingCode,
} from 'libphonenumber-js';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlagComponent } from '../icon/flag/flag.component';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { MatButtonModule } from '@angular/material/button';
import { IconComponent } from '../icon';
import { MatMenuModule } from '@angular/material/menu';
import { COUNTRY_LIST, Country } from '../country-select';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  tap,
} from 'rxjs';
import { FilterPipe } from '@lendai-us/cdk';
import { BodyComponent } from '../typography';
import { DividerComponent } from '../divider';

@Component({
  selector: 'lai-phone-input',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FlagComponent,
    NgxMaskDirective,
    NgxMaskPipe,
    MatButtonModule,
    IconComponent,
    MatMenuModule,
    FilterPipe,
    ReactiveFormsModule,
    BodyComponent,
    DividerComponent,
  ],
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: PhoneInputComponent,
      multi: true,
    },
    { provide: NG_VALIDATORS, useExisting: PhoneInputComponent, multi: true },
  ],
})
export class PhoneInputComponent
  implements OnInit, OnDestroy, ControlValueAccessor, Validator
{
  @Input() label = '';
  @Input() isReadonly = false;
  @Input() isRequired = false;

  @ViewChild('input', { static: true })
  private readonly inputRef!: ElementRef<HTMLInputElement>;
  @ViewChild(NgModel, { static: true })
  private readonly ngModel!: NgModel;

  onChange!: (value: unknown) => void;
  onTouched!: () => void;
  onValidatorChange!: () => void;

  protected readonly countries = inject(COUNTRY_LIST);
  // template binding is via template driven forms and not via render.setProperty,
  // because of ngx-mask, that is overriding inner input value and resets it in case it is default to 1
  protected flag = '';
  protected code = '';
  protected phone = '';
  protected value = '';
  protected isDisabled = false;
  protected readonly placeholder = '6135550194';
  protected readonly mask = '000 000 00 00||00 000 0000||0 00 0000 0000';
  protected filteredList = this.countries.slice();
  private readonly externalFormat: NumberFormat = 'E.164';
  private readonly sub$ = new Subscription();

  ngOnInit(): void {
    this.sub$.add(
      fromEvent(this.inputRef.nativeElement, 'input')
        .pipe(
          debounceTime(300),
          distinctUntilChanged(),
          // tap(this.updateFlag.bind(this)),
          tap(this.updateExternalControl.bind(this))
        )
        .subscribe()
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  applySearchFilter(searchText: string): void {
    this.filteredList = this.countries.filter(item => {
      if (
        item.name.toString().toLowerCase().indexOf(searchText.toLowerCase()) !==
        -1
      ) {
        return true;
      }
      return false;
    });
  }

  writeValue(phone: string): void {
    const number = parseNumber(this.code && phone ? this.code + phone : '');
    if (!isParsedNumber(number)) {
      return;
    }

    // const formatted = formatNumber(number, this.externalFormat);
    this.flag = number.country;
    this.countries.filter(item => {
      if (item.alpha2Code === number.country) {
        this.code = item.callingCode.toString();
      }
      return '';
    });
    this.phone = number.phone;
  }

  validate({
    value,
  }: AbstractControl<string, string>): ValidationErrors | null {
    value = this.code + this.phone;
    if (!value) {
      return null;
    }

    const isValid = isValidPhoneNumber(value);
    if (!isValid) {
      const errors = {
        ...this.ngModel.control.errors,
        phoneValidator: true,
      };
      this.ngModel.control.setErrors(errors);
      return errors;
    }

    const errors = this.ngModel.control.errors;
    if (!errors) {
      this.value = value;
      return null;
    }

    const { phoneValidator: _, ...other } = errors;
    this.ngModel.control.setErrors(other);
    return null;
  }

  registerOnChange(fn: (value: unknown) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  protected countrySelected({ alpha2Code, callingCode }: Country): void {
    this.flag = alpha2Code;
    this.code = callingCode;

    const number = parseNumber(`+${this.value}`);
    if (!isParsedNumber(number)) {
      // this.value = callingCode.substring(1);
      return;
    }

    number.country = alpha2Code as CountryCode;
    number.countryCallingCode = callingCode as CountryCallingCode;
    const formatted = formatNumber(number, this.externalFormat);
    this.value = formatted;
  }

  private updateExternalControl(): void {
    const number = parseNumber(`+${this.value}`);
    if (!isParsedNumber(number)) {
      this.onChange(this.phone);
      return;
    }

    const formatted = formatNumber(number, this.externalFormat);

    this.onChange(formatted);
  }
}

function isParsedNumber(obj: ParsedNumber | object): obj is ParsedNumber {
  return Object.hasOwn(obj, 'phone');
}
