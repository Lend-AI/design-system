import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { PhoneInputComponent } from './phone-input.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { COUNTRY_LIST } from '../country-select';
import { provideNgxMask } from 'ngx-mask';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@Component({
  standalone: true,
  template: `<lai-phone-input [formControl]="control"></lai-phone-input>`,
  styles: [],
  imports: [ReactiveFormsModule, PhoneInputComponent],
})
class ParentComponent {
  control = inject(FormBuilder).control('+972559256908');
}

const meta: Meta<ParentComponent> = {
  title: 'WIP/PhoneInput',
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [
        { provide: COUNTRY_LIST, useValue: [] },
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
