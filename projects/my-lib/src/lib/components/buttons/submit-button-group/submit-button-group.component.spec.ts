import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitButtonGroupComponent } from './submit-button-group.component';

describe('SubmitButtonGroupComponent', () => {
  let component: SubmitButtonGroupComponent;
  let fixture: ComponentFixture<SubmitButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitButtonGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
