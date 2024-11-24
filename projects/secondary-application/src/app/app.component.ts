import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressFormComponent } from '../../../my-lib/src/lib/components/address/address-form/address-form.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddressFormModel, AddressModel } from '@my-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddressFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  fb = new FormBuilder();

  addressObj: Partial<AddressModel> = {
    addressLineOne: '2745 Towne Blvd',
  };

  parentForm = new FormGroup({
    addressForm: AddressFormComponent.createForm(this.fb, this.addressObj),
  });

  get addressForm(): FormGroup<AddressFormModel> {
    return this.parentForm.controls.addressForm;
  }
}
