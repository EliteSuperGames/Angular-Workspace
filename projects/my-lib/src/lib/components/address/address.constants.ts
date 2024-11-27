import { FormGroup, FormControl } from '@angular/forms';

export type AddressFormGroup = FormGroup<AddressFormModel>;

export interface AddressFormModel {
  addressLineOne: FormControl<string>;
  addressLineTwo: FormControl<string>;
  state: FormControl<string>;
  zip: FormControl<string>;
  city: FormControl<string>;
}

export interface AddressModel {
  addressLineOne: string;
  addressLineTwo: string;
  state: string;
  zip: string;
  city: string;
}

export const states: state[] = [
  {
    display: 'Alabama',
    value: 'AL',
  },
  {
    display: 'Ohio',
    value: 'OH',
  },
  {
    display: 'Pennsylvania',
    value: 'PA',
  },
];

export type state = {
  display: string;
  value: string;
};
