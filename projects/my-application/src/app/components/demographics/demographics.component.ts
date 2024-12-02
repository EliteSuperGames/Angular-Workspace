import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  GreetingService,
  AddressModel,
  AddressFormComponent,
  AddressFormModel,
  SubmitButtonGroupComponent,
  Greeting,
} from '@my-lib';

@Component({
  selector: 'app-demographics',
  standalone: true,
  imports: [
    AddressFormComponent,
    ReactiveFormsModule,
    CommonModule,
    SubmitButtonGroupComponent,
  ],
  templateUrl: './demographics.component.html',
  styleUrl: './demographics.component.scss',
})
export class DemographicsComponent {
  fb = new FormBuilder();
  greeting = signal<Greeting | null>(null);
  greetingService = inject(GreetingService);

  title = 'my-application';
  addressObj: Partial<AddressModel> = {
    city: 'Franklin',
    zip: '45005',
  };

  parentForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    addressForm: AddressFormComponent.createForm(this.fb, this.addressObj),
  });

  ngOnInit(): void {}

  get addressForm(): FormGroup<AddressFormModel> {
    return this.parentForm.controls.addressForm;
  }

  public backButtonClicked(): void {
    this.parentForm.reset();
  }

  public submitButtonClicked(): void {
    this.addressObj = { ...this.addressForm.value };
    this.greetingService.getGreetings(this.name.value).subscribe({
      next: (data) => {
        this.greeting.set(data);
      },
      complete: () => {},
      error: (error) => {},
    });
  }

  public get name(): FormControl<string> {
    return this.parentForm.controls.name;
  }
}
