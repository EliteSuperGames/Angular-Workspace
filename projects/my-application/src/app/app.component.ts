import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressFormModel, AddressFormComponent, AddressModel } from '@my-lib';
import { SubmitButtonGroupComponent } from '../../../my-lib/src/lib/components/buttons/submit-button-group/submit-button-group.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AddressFormComponent,
    ReactiveFormsModule,
    SubmitButtonGroupComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  fb = new FormBuilder();
  addressObj: Partial<AddressModel> = {};

  parentForm = new FormGroup({
    addressForm: AddressFormComponent.createForm(this.fb),
  });

  get addressForm(): FormGroup<AddressFormModel> {
    return this.parentForm.controls.addressForm;
  }

  public backButtonClicked(): void {
    this.parentForm.reset();
  }

  public submitButtonClicked(): void {
    console.log('submitButtonClicked');
    this.addressObj = { ...this.addressForm.value };
  }
}
