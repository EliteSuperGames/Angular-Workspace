import { FormGroup, FormControl } from '@angular/forms';

export type DemographicFormGroup = FormGroup<DemographicFormModel>;

export interface DemographicFormModel {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  dob: FormControl<string>;
  ssn: FormControl<string>;
}

export interface DemographicModel {
  firstName: string;
  lastName: string;
  dob: string;
  ssn: string;
}
