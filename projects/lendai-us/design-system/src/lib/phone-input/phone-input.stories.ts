import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { PhoneInputComponent } from './phone-input.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { COUNTRY_LIST, Country } from '../country-select';
import { provideNgxMask } from 'ngx-mask';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  standalone: true,
  template: ` <lai-phone-input
    [formControl]="control"
    label="phone"></lai-phone-input>`,
  styles: [],
  imports: [ReactiveFormsModule, PhoneInputComponent],
})
class ParentComponent {
  control = inject(FormBuilder).control('+972559256908');
}

export const COUNTRY_LIST_VALUE: Country[] = [
  {
    name: 'Afghanistan',
    alpha2Code: 'AF',
    alpha3Code: 'AFG',
    numericCode: '004',
    callingCode: '+93',
  },
  {
    name: 'Israel',
    alpha2Code: 'IL',
    alpha3Code: 'ISR',
    numericCode: '376',
    callingCode: '+972',
  },
  {
    name: 'Italy',
    alpha2Code: 'IT',
    alpha3Code: 'ITA',
    numericCode: '380',
    callingCode: '+39',
  },
];

const meta: Meta<ParentComponent> = {
  title: 'WIP/PhoneInput',
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule],
      providers: [
        { provide: COUNTRY_LIST, useValue: COUNTRY_LIST_VALUE },
        provideNgxMask(),
        {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: { appearance: 'outline' },
        },
      ],
    }),
  ],
  component: ParentComponent,
};
export default meta;
type Story = StoryObj<ParentComponent>;

export const PhoneInput: Story = {
  args: {},
  render: props => ({
    props,
  }),
};
