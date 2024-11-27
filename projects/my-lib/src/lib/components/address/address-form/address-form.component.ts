import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AddressFormModel, AddressModel, states } from '../address.constants';

@Component({
  selector: 'lib-address-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss',
})
export class AddressFormComponent {
  addressForm = input.required<FormGroup<AddressFormModel>>();
  states = states;

  ngOnInit(): void {}

  constructor() {}

  public get addressLineOne(): FormControl<string> {
    return this.addressForm().controls.addressLineOne;
  }

  public get addressLineTwo(): FormControl<string> {
    return this.addressForm().controls.addressLineTwo;
  }

  public get city(): FormControl<string> {
    return this.addressForm().controls.city;
  }

  public get state(): FormControl<string> {
    return this.addressForm().controls.state;
  }

  public get zip(): FormControl<string> {
    return this.addressForm().controls.zip;
  }

  static createForm(
    fb: FormBuilder,
    initialValues?: Partial<AddressModel>
  ): FormGroup<AddressFormModel> {
    const form = fb.group<AddressFormModel>({
      addressLineOne: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(25)],
      }),
      addressLineTwo: new FormControl('', {
        nonNullable: true,
        validators: [Validators.maxLength(25)],
      }),
      city: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(25)],
      }),
      state: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      zip: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.maxLength(5),
          Validators.minLength(5),
        ],
      }),
    });

    if (initialValues) {
      form.patchValue(initialValues);
    }

    return form;
  }
}
