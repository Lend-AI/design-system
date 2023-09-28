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

const COUNTRY_LIST_VALUE: Country[] = [
  {
    name: 'Argentina',
    alpha2Code: 'AR',
    alpha3Code: 'ARG',
    numericCode: '032',
    callingCode: '+54',
  },
  {
    name: 'Azerbaijan',
    alpha2Code: 'AZ',
    alpha3Code: 'AZE',
    numericCode: '031',
    callingCode: '+994',
  },
  {
    name: 'Brazil',
    alpha2Code: 'BR',
    alpha3Code: 'BRA',
    numericCode: '076',
    callingCode: '+55',
  },
  {
    name: 'Bulgaria',
    alpha2Code: 'BG',
    alpha3Code: 'BGR',
    numericCode: '100',
    callingCode: '+359',
  },
  {
    name: 'Canada',
    alpha2Code: 'CA',
    alpha3Code: 'CAN',
    numericCode: '124',
    callingCode: '+1',
  },
  {
    name: 'Cyprus',
    alpha2Code: 'CY',
    alpha3Code: 'CYP',
    numericCode: '196',
    callingCode: '+357',
  },
  {
    name: 'Czech Republic',
    alpha2Code: 'CZ',
    alpha3Code: 'CZE',
    numericCode: '203',
    callingCode: '+420',
  },
  {
    name: 'Denmark',
    alpha2Code: 'DK',
    alpha3Code: 'DNK',
    numericCode: '208',
    callingCode: '+45',
  },
  {
    name: 'Egypt',
    alpha2Code: 'EG',
    alpha3Code: 'EGY',
    numericCode: '818',
    callingCode: '+20',
  },
  {
    name: 'France',
    alpha2Code: 'FR',
    alpha3Code: 'FRA',
    numericCode: '250',
    callingCode: '+33',
  },
  {
    name: 'Germany',
    alpha2Code: 'DE',
    alpha3Code: 'DEU',
    numericCode: '276',
    callingCode: '+49',
  },
  {
    name: 'Greece',
    alpha2Code: 'GR',
    alpha3Code: 'GRC',
    numericCode: '300',
    callingCode: '+30',
  },
  {
    name: 'Guatemala',
    alpha2Code: 'GT',
    alpha3Code: 'GTM',
    numericCode: '320',
    callingCode: '+502',
  },
  {
    name: 'Hong Kong',
    alpha2Code: 'HK',
    alpha3Code: 'HKG',
    numericCode: '344',
    callingCode: '+852',
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
  {
    name: 'Jordan',
    alpha2Code: 'JO',
    alpha3Code: 'JOR',
    numericCode: '400',
    callingCode: '+962',
  },
  {
    name: 'Kuwait',
    alpha2Code: 'KW',
    alpha3Code: 'KWT',
    numericCode: '414',
    callingCode: '+965',
  },
  {
    name: 'Latvia',
    alpha2Code: 'LV',
    alpha3Code: 'LVA',
    numericCode: '428',
    callingCode: '+371',
  },
  {
    name: 'Luxembourg',
    alpha2Code: 'LU',
    alpha3Code: 'LUX',
    numericCode: '442',
    callingCode: '+352',
  },
  {
    name: 'Monaco',
    alpha2Code: 'MC',
    alpha3Code: 'MCO',
    numericCode: '492',
    callingCode: '+377',
  },
  {
    name: 'Morocco',
    alpha2Code: 'MA',
    alpha3Code: 'MAR',
    numericCode: '504',
    callingCode: '+212',
  },
  {
    name: 'New Zealand',
    alpha2Code: 'NZ',
    alpha3Code: 'NZL',
    numericCode: '554',
    callingCode: '+64',
  },
  {
    name: "Korea (Democratic People's Republic of)",
    alpha2Code: 'KP',
    alpha3Code: 'PRK',
    numericCode: '408',
    callingCode: '+850',
  },
  {
    name: 'Norway',
    alpha2Code: 'NO',
    alpha3Code: 'NOR',
    numericCode: '578',
    callingCode: '+47',
  },
  {
    name: 'Oman',
    alpha2Code: 'OM',
    alpha3Code: 'OMN',
    numericCode: '512',
    callingCode: '+968',
  },
  {
    name: 'Peru',
    alpha2Code: 'PE',
    alpha3Code: 'PER',
    numericCode: '604',
    callingCode: '+51',
  },
  {
    name: 'Philippines',
    alpha2Code: 'PH',
    alpha3Code: 'PHL',
    numericCode: '608',
    callingCode: '+63',
  },
  {
    name: 'Romania',
    alpha2Code: 'RO',
    alpha3Code: 'ROU',
    numericCode: '642',
    callingCode: '+40',
  },
  {
    name: 'Russian Federation',
    alpha2Code: 'RU',
    alpha3Code: 'RUS',
    numericCode: '643',
    callingCode: '+7',
  },
  {
    name: 'Rwanda',
    alpha2Code: 'RW',
    alpha3Code: 'RWA',
    numericCode: '646',
    callingCode: '+250',
  },
  {
    name: 'Saint Lucia',
    alpha2Code: 'LC',
    alpha3Code: 'LCA',
    numericCode: '662',
    callingCode: '+1758',
  },
  {
    name: 'Spain',
    alpha2Code: 'ES',
    alpha3Code: 'ESP',
    numericCode: '724',
    callingCode: '+34',
  },
  {
    name: 'Sweden',
    alpha2Code: 'SE',
    alpha3Code: 'SWE',
    numericCode: '752',
    callingCode: '+46',
  },
  {
    name: 'Tunisia',
    alpha2Code: 'TN',
    alpha3Code: 'TUN',
    numericCode: '788',
    callingCode: '+216',
  },
  {
    name: 'Turkey',
    alpha2Code: 'TR',
    alpha3Code: 'TUR',
    numericCode: '792',
    callingCode: '+90',
  },
  {
    name: 'United States of America',
    alpha2Code: 'US',
    alpha3Code: 'USA',
    numericCode: '840',
    callingCode: '+1',
  },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    alpha2Code: 'VE',
    alpha3Code: 'VEN',
    numericCode: '862',
    callingCode: '+58',
  },
  {
    name: 'Western Sahara',
    alpha2Code: 'EH',
    alpha3Code: 'ESH',
    numericCode: '732',
    callingCode: '+212',
  },
  {
    name: 'Yemen',
    alpha2Code: 'YE',
    alpha3Code: 'YEM',
    numericCode: '887',
    callingCode: '+967',
  },
  {
    name: 'Zimbabwe',
    alpha2Code: 'ZW',
    alpha3Code: 'ZWE',
    numericCode: '716',
    callingCode: '+263',
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
  render: (props) => ({
    props,
  }),
};
