import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'lib-submit-button-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submit-button-group.component.html',
  styleUrl: './submit-button-group.component.css',
})
export class SubmitButtonGroupComponent {
  isSubmitDisabled = input(false);
  submitText = input('Submit');
  submitClicked = output<void>();

  isLoading = input(false);
  loadingText = input('Submitting...');

  showBackButton = input(true);
  backText = input('Back');
  backClicked = output<void>();

  onBackClicked(): void {
    this.backClicked.emit();
  }

  onSubmitClicked(): void {
    this.submitClicked.emit();
  }
}
