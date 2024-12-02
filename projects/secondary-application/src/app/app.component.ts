import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddressFormComponent } from '../../../my-lib/src/lib/components/address/address-form/address-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressFormModel, AddressModel } from '@my-lib';
import { DemographicsFormComponent } from '../../../my-lib/src/lib/components/demographics/demographics-form/demographics-form.component';
import {
  DemographicFormModel,
  DemographicModel,
} from 'my-lib/src/lib/components/demographics/demographics.constants';
import { SubmitButtonGroupComponent } from '../../../my-lib/src/lib/components/buttons/submit-button-group/submit-button-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AddressFormComponent,
    DemographicsFormComponent,
    SubmitButtonGroupComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  fb = new FormBuilder();
  title = 'secondary-application';
  addressObj: Partial<AddressModel> = {
    addressLineOne: '2745 Towne Blvd',
  };

  demographicObj: Partial<DemographicModel> = {
    firstName: 'David',
  };

  parentForm = new FormGroup({
    addressForm: AddressFormComponent.createForm(this.fb, this.addressObj),
    demographicForm: DemographicsFormComponent.createForm(
      this.fb,
      this.demographicObj
    ),
  });

  get addressForm(): FormGroup<AddressFormModel> {
    return this.parentForm.controls.addressForm;
  }

  get demographicForm(): FormGroup<DemographicFormModel> {
    return this.parentForm.controls.demographicForm;
  }
}
