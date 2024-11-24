import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AddressFormModel, states } from '../address.constants';

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

  static createForm(fb: FormBuilder): FormGroup<AddressFormModel> {
    return fb.group<AddressFormModel>({
      addressLineOne: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      addressLineTwo: new FormControl('', { nonNullable: true }),
      city: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      state: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      zip: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }
}
