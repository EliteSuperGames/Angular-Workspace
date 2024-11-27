import { Component, input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  DemographicModel,
  DemographicFormModel,
} from '../demographics.constants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-demographics-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './demographics-form.component.html',
  styleUrl: './demographics-form.component.scss',
})
export class DemographicsFormComponent {
  demographicForm = input.required<FormGroup<DemographicFormModel>>();

  get firstName(): FormControl<string> {
    return this.demographicForm().controls.firstName;
  }

  get lastName(): FormControl<string> {
    return this.demographicForm().controls.lastName;
  }

  get dob(): FormControl<string> {
    return this.demographicForm().controls.dob;
  }

  get ssn(): FormControl<string> {
    return this.demographicForm().controls.ssn;
  }

  static createForm(
    fb: FormBuilder,
    initialValues?: Partial<DemographicModel>
  ): FormGroup<DemographicFormModel> {
    const form = fb.group<DemographicFormModel>({
      firstName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(25)],
      }),
      lastName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(40)],
      }),
      dob: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      ssn: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(9)],
      }),
    });
    if (initialValues) {
      form.patchValue(initialValues);
    }

    return form;
  }
}
