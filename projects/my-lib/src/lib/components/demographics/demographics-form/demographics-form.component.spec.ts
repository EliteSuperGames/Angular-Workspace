import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicsFormComponent } from './demographics-form.component';

describe('DemographicsFormComponent', () => {
  let component: DemographicsFormComponent;
  let fixture: ComponentFixture<DemographicsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemographicsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemographicsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
